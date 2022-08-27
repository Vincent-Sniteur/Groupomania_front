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
        users: [],
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
                            console.log("Erreur 401")
                            localStorage.clear()
                            this.$store.dispatch('logout')
                            this.$router.push('/')
                        }
                })
                .then(res => {
                    this.posts = res.posts
                    console.log(res)
                })
                .catch(err => console.log(err))
        }
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
                    
                    <!-- Display message if no post // Add in a post composant -->
                    <div v-if="posts.length == 0" class="text-center">
                        <h3 class="text-center alert-danger alert">No post yet</h3>
                    </div>

                    <!-- Menu Last Message Posted + img -->  
                    <li v-for="post in posts">
                        <DisplayMessage/>
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
</style>