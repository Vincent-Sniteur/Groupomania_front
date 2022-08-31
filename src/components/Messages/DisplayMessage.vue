<script>
const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env
const fetchURL = 'http://' + VITE_SERVER_URL + ':' + VITE_SERVER_PORT + '/'

// Export the display message component with like / edit / delete buttons
export default {
    name: "DisplayMessage",
    data() {
        return {
            posts: [],
            userCommande: false,
            editClicked: false,
            postLike: null,
            heart: false,
        }
    },
    props: [
        'id',
        'postDate',
        'message',
        'postImage',
        'userId',
        'username',
        'avatar',
        'bio',
        'role',
        'status',
        'likes',
        'usersLike'
    ],
    methods: {
        // Display edit form for message
        edit() {
            this.editClicked = true
        },
        // Send edited message to the server
        editPost() {
            // Display edit form disabled
            this.editClicked = false
            // New message content
            this.$refs.editMessage.value = this.message

            fetch(fetchURL + "message/" + this.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    message: this.message,
                    id: this.id
                })
            })
                .then(res => {
                    if (res.ok) {
                        alert("Message modifié")
                    }
                    else throw new Error("Error editing post")
                })
                .catch(error => console.log(error))
        },
        // Delete message
        deletePost() {
            fetch(fetchURL + "message/" + this.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
            })
                .then((res) => {
                        // If res is valide force reload
                            if (res.ok) {
                                this.$router.go()
                            }
                            else throw new Error("Delete error")
                })
                .catch(error => console.log(error))
        },
        // Like message & send to server
        likePost() {
            // Verify If user already liked the post or not
            if (this.usersLike.includes(this.$store.state.user.userId)) {
                this.postLike = false
            }
            else {
                this.postLike = true
            }
            // fetch to server
            fetch(fetchURL + "message/" + this.id + "/like", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    id: this.id,
                    userId: this.$store.state.user.userId,
                    likes: this.postLike
                })
            })
                .then(res => {
                    if (res.ok) {
                        this.$router.go()
                    }
                    else throw new Error("Error liking post")
                })
                .catch(error => console.log(error))
        },
    },
    mounted: function () {
        // Verify if user is admin or userId is the same as the post for display the delete & edit button
        if (this.$store.state.user.role == "admin" || this.userId == this.$store.state.user.userId) {
            this.userCommande = true
        }
        // Verify if user already liked the post or not & display the heart
        if (this.usersLike.includes(this.$store.state.user.userId)) {
            this.heart = true
        }
    },
}

</script>


<template>
<div class="active mt-3" id="home" role="tabpanel" aria-expanded="true">
    <div class="post">
        <!-- Profil img -->
        <img id="user-avatar" class="mr-3 rounded-circle img-flex" :src="avatar">

        <!-- Username for eatch post in home componant-->
        <h5 v-if="username" id="username" class="post-username card-title">{{ username }}</h5>

        <!-- Attached file -->
        <div class="post-attach mt-2">
            <img v-if="postImage" class="card-img-top mb-1" :src="postImage" alt="Attached file">
        </div>

        <!-- Timestamp & User option -->
        <p id="message-info" class="post-timestamp mt-2">{{ postDate }}
            <!-- Edit button with click prevent use function editClicked --> 
            <button v-if="userCommande" id="edit-btn" class="edit-button" @click="edit">Edit</button>
            <!-- Delete button for admin or author -->
            <button v-if="userCommande" id="delete-btn" class="delete-button" @click.prevent="deletePost">Delete</button>
        </p>
        

        <!-- Message -->
        <p v-if="message" id="user-message" class="post-text">{{message}}</p>
        
        <!-- Form edit message -->
        <div v-if="editClicked" class="edit-message">
            <textarea 
                class="form-control" 
                id="edit-message" 
                rows="3"
                maxlength="500"
                ref="editMessage"
                v-model="message"
                >{{message}}
            </textarea>
            <button 
                type="button" 
                class="btn btn-primary mt-1 rounded-pill" 
                :disabled="message.length <= 0"
                @click.prevent="editPost"
                >Save
            </button>
        </div>
        
        <!-- Post Option-->
        <div class="post-option mb-1">
            <!-- Heart & like -->
            <div class="placement">
                <!-- Number of like -->
                <p class="post-like">{{ likes }} likes</p>
                <!-- Heart button -->
                <div v-if="heart" class="heart is-active" @click="likePost"></div>
                <div v-else class="heart" @click="likePost"></div>
            </div>
        </div>

        

    </div>
</div>
</template>

<!-- GLOBAL STYLE IMPORTANT -->
<style>
/* POST */ 
.post {
    background-color: white;
    border-top: 1px solid #4E5166;
    border-bottom: 1px solid #4E5166;
    position: relative;
    padding: 10px 0 20px 0;
    border-radius: 5px;
}
#user-avatar {
    width: 50px;
    height: 50px;
}
.post-username {
    color: #363636;
    line-height: 1.5em;
    font-size: 1.1em;
    font-weight: 700;
    text-transform: uppercase;
    margin-inline-start: 3px;
    display: inline;
}
.post-username:hover {
    color: #FD2D01;
    cursor: pointer;
}
.post-timestamp {
    color: #4E5166;
    font-size: .6875em;
    line-height: 1em;
    margin-inline-start: 3px;
}
.post-text {
    font-size: .875em;
    line-height: 1.8em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 5px;
    margin-inline-end: 0px;
}
.edit-button {
    margin-left: 8px;
    color: #4E5166;
    font-weight: 700;
    text-decoration: none;
}
.delete-button {
    margin-left: 8px;
    color: #FD2D01;
    font-weight: 700;
    text-decoration: none;
}
.admin-button {
    margin-left: 8px;
    color: #FD2D01;
    font-weight: 700;
    text-decoration: none;
}

/* ATTACH FILE IMG */
.post-attach img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
}

.post-like {
    font-size: .6875em;
    line-height: 1em;
    font-weight: 700;
    position: absolute;
    bottom: 20%;
}

/* LIKE BUTTON */
.heart {
    width: 100px;
    height: 100px;
    background: url("../img/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
}
/* If heart = active*/
 .heart.is-active {
	transition-duration: 1s;
	background-position: -2800px 0;
}
.placement {
    cursor: pointer;
    transform: translate(-50%, -50%);
    position: absolute;
    margin-inline-start: 95%;
}
</style>