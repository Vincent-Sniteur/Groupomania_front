<script>
import HomeProfil from '../Users/HomeProfil.vue'
import CreateMessage from '../Messages/CreateMessage.vue'
import DisplayMessage from '../Messages/DisplayMessage.vue'

// Info for fetch
const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env
const fetchURL = 'http://' + VITE_SERVER_URL + ':' + VITE_SERVER_PORT + '/'

// Data component
const data = () => {
    return {
        posts: [],
    }
}

// Export Home component
export default {
    name: "Home",
    data,
    components: {
        HomeProfil,
        CreateMessage,
        DisplayMessage
    },
    methods: {
        // Get all posts
        allPost() {
            loader() // Loader animation Timeout
            fetch(fetchURL + "message", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
                .then((res) => {
                    // If res is valide
                        if (res.ok) return res.json()
                    // if res = token expired or invalid
                        if (res.status === 401) {
                            localStorage.clear()
                            this.$store.dispatch('logout')
                            this.$router.push('/')
                        }
                })
                .then(res => {
                    // Display all posts in order of date (last post first)
                    const posts = res.posts.sort((a, b) => new Date(b.date) - new Date(a.date))
                    
                    // Change format date 
                    posts.forEach(post => {
                        post.date = new Date(post.date).toLocaleString()
                    })

                    this.posts = posts

                })
                .catch(err => console.log(err))
        },
    },
    // If user is not auth, redirect to landing. Else, get all posts and display them in home
    mounted: function () {
        if (!this.$store.state.isUserAuth) {
            this.$router.push("/")
        } else {
            this.allPost() // Get all posts
        }
    },
}

// Loader display animation only for 1s (Timeout) before the fetch
function loader() {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none"
    }, 600)
}

</script>


<template>
<div class="section">
    <div class="container-fluid">
        <div class="row">
                    
            <!-- Import HomeProfil --> 
            <HomeProfil v-if="this.$store.state.user" />


            <!-- WALL -->
            <div class="col-md-6">
                <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item">
                        <router-link  to="/home" class="nav-link active" data-toggle="tab" role="tab" aria-controls="home" aria-expanded="true">
                            Last Message
                        </router-link>
                    </li>
                </ul>
          
                <!-- POST MESSAGE & NAVBAR WALL x LIKES -->
                <div class="tab-content">
                    <!-- POST MESSAGE -->
                    <CreateMessage />

                    <!-- Loader -->
                    <div id="preloader" class="preloader">
                        <p class="loading-text">loading</p>
                        <div class="loader"></div>
                    </div>


                    <!-- Display message if no post // Add in a post composant -->
                    <div v-if="posts.length === 0" class="text-center">
                        <h3 class="text-center alert-danger alert">No post yet</h3>
                    </div>

                    <!-- Menu Last Message Posted + img -->  
                    <li v-for="post in posts">
                        <DisplayMessage
                            :id="post._id"
                            :postDate="post.date"
                            :message="post.message"
                            :postImage="post.image"
                            :userId="post.userId"
                            :username="post.user.username"
                            :avatar="post.user.avatar"
                            :bio="post.user.bio"
                            :role="post.user.role"
                            :status="post.user.status"
                            :likes="post.likes"
                            :usersLike="post.usersLiked"
                        >
                        </DisplayMessage>
                    </li>
                </div>
            </div>
        </div>
    </div>
</div>



</template>



<style scoped>
li {
    list-style: none;
}

/* Preloader */
/* Animation Preload */
@keyframes spinner {
	to {
		transform: rotateZ(360deg);
	}
}
.preloader {
	align-items: center;
    cursor: none;
	display: flex;
    height: 100%;
    justify-content: center;
	position: fixed;
	left: 0;
    top: 0;
	width: 100%;
    z-index: 9999;
    background-color: #fff;
    opacity: 0.9;
}
.preloader .loading-text {
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: absolute;
    top: 52%;
}
/* Loader */
.preloader .loader {
    animation: spinner 1s infinite linear;
    border-radius: 50%;
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-top-color: #000000;
    height: 5em;
    margin: 0 auto 3.5em auto;
    width: 5em;
}

</style>