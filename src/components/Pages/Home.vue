<script>
// Components Profil home page
import HomeProfil from '../Users/HomeProfil.vue'
// Components Create post
import CreateMessage from '../Messages/CreateMessage.vue'
// Components Wall display post
import DisplayMessage from '../Messages/DisplayMessage.vue'
// Service fetch get all post
import getMessageFetch from '../services/getPosts.js'

// Data component
const data = () => {
    return {
        posts: [],
        postStatus: null,
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
            // Reset posts array for refresh posts
            this.posts = []
            // Service Get all posts
            getMessageFetch()
            .then((res) => {
                // If res is valide
                if (res.status === 200) return res.json()
                // If 204 no content
                if (res.status === 204) {
                    this.postStatus = 204
                    return res.json()
                }
                // if res = token expired or invalid
                if (res.status === 401) {
                    localStorage.clear()
                    this.$store.dispatch('logout')
                    this.$router.push('/')
                }
            })
            .then(res => {
                // Display all posts in order of date (last post first)
                const post = res.posts.sort((a, b) => new Date(b.date) - new Date(a.date))

                // Change format date 
                post.forEach(post => {
                    post.date = new Date(post.date).toLocaleString()
                })

                // Insert posts in posts array
                this.posts = post
            })
            .catch(err => console.log(err))
        },
    },
    // If user is not auth, redirect to landing.
    // If user is auth get all posts and display them in home
    mounted: function () {
        if (!this.$store.state.isUserAuth) {
            this.$router.push("/")
        } else {
            this.allPost() // Get all posts
        }
        // Update Live posts every 30 seconds if user is auth
        if (this.$store.state.isUserAuth) {
            setInterval(() => {
                this.allPost()
            }, 30000)
        }
    },
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
                    <div id="preloader" class="preloader" >
                        <p class="loading-text">loading...</p>
                        <div class="loader"></div>
                    </div>

                    <!-- No content message if status 204-->
                    <div v-if="postStatus === 204" class="text-center alert alert-info" role="alert">
                        <p class="text-center">No post</p>
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
@keyframes fadeOut {
    to {
        opacity: 0;
        display: none;
        transform: scale(0);
        background-color: transparent;
    }
}
.preloader {
    position: fixed;
    inset: 0;
    opacity: 0.9;
    z-index: 9999;
    background-color: white;
    animation: fadeOut 300ms 600ms forwards;
}
.preloader .loading-text {
    display: flex;
    position: fixed;
    justify-content: center;
    width: 100%;
    top: 48%;
    font-size: 20px;
    font-weight: bold;
}
/* Loader */
.preloader .loader {
    animation: spinner 1s infinite linear;
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #ff0000;
}
</style>