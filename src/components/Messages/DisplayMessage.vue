<script>

// Export Wall of messages
export default {
    name: "DisplayMessage",
    data() {
        return {
            posts: [],
            userCommande: false,
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
        'status'
    ],
    mounted: function () {
        // Verify if user is admin or userId is the same as the post for display the delete & edit button
        if (this.$store.state.user.role == "admin" || this.userId == this.$store.state.user.userId) {
            this.userCommande = true
        }
    },
}

// Function for delete message if user is admin or author
// function deleteMessage(id) {
//     fetch(fetchURL + "message/" + id, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer " + localStorage.getItem("token"),
//         },
//     })
//         // Return response in json
//         .then((res) => {
//             if (res.ok) return res.json()
//         })
//         // Save response in res
//         .then((res) => {
//             console.log(res)
//             this.getMessages()
//         })
//         // Catch error
//         .catch((err) => {
//             console.log(err)
//         })
// }

// // TODO : Add function if heart is clicked then toggle class is-active
function likeMessage() {
    const heart = document.querySelector('#heart')
    heart.addEventListener('click', () => {
        if (heart.classList.contains('is-active')) {
            heart.classList.remove('is-active')
        } else {
            heart.classList.add('is-active')
        }
    })
}


</script>


<template>
<div class="active mt-3" id="home" role="tabpanel" aria-expanded="true">
<!-- EXEMPLE MESSAGE NO ATTACHED FILE -->
    <div class="post">
        <!-- Profil img -->
        <img id="user-avatar" class="mr-3 rounded-circle img-flex" :src="avatar">

        <!-- Username for eatch post in home componant-->
        <h5 v-if="username" id="username" class="post-username card-title">{{ username }}</h5>

        <!-- Attached file -->
        <div class="post-attach mt-2">
            <img v-if="postImage" class="card-img-top mb-1" :src="postImage" alt="Attached file">
        </div>

        <!-- TODO Timestamp & User option -->
        <p id="message-info" class="post-timestamp mt-2">{{ postDate }}
            <!-- Edit button TODO IF USER IS ADMIN OR AUTHOR -->
            <router-link to="#" v-if="userCommande === true" id="edit-btn" class="edit-button">Edit</router-link>
            <!-- Delete button TODO IF USER IS ADMIN OR AUTHOR -->
            <router-link to="#" v-if="userCommande === true" id="delete-btn" class="delete-button">Delete</router-link>
        </p>
        

        <!-- Message -->
        <p v-if="message" id="user-message" class="post-text">{{message}}</p>
        
        <!-- Post Option-->
        <div class="post-option mb-1">
            <!-- Heart -->
            <div class="placement">
                <div id="heart" class="heart" @click.prevent="likeMessage()"></div>
            </div>
        </div>
    </div>
<!-- END EXEMPLE MESSAGE -->
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


/* LIKE BUTTON */
.heart {
    width: 100px;
    height: 100px;
    background: url("../img/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
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