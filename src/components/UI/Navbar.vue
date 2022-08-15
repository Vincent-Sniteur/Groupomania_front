<script>

// Export Navbar component
export default {
    name: 'Navbar',
    methods: {
        // Function logout for logout user - clean localStorage & store
        logout() {
            localStorage.clear()
            this.$store.dispatch('logout')
            this.$router.push('/')
        },
        // Verify if user is logged for display navbar btn or not
        isUserLoggedIn() {
            return this.$store.state.isUserAuth
        },
    }
}

</script>


<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <!-- Name / Logo -->
           <router-link to="/" class="text-decoration-none text-white">
                <h1>Groupomania</h1>
           </router-link>

            <!-- NavBar -->
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><router-link to="/home" class="nav-link px-2 text-white">Home</router-link></li>
                <li><router-link to="/contact" class="nav-link px-2 text-white">Contact</router-link></li>
                <li><router-link to="#" class="nav-link px-2 text-white">About us</router-link></li>
            </ul>
            <!-- Auth Navbar -->
            <div class="text-end">

                <!-- Login Btn -->
                <router-link to="/login">
                    <button v-if="!isUserLoggedIn()"
                        @click="" 
                        id="btn-login" 
                        type="button" 
                        class="btn btn-outline-light me-2 rounded-pill"
                        >Login
                    </button>
                </router-link>

                <!-- Register Btn -->
                <router-link to="/register">
                    <button v-if="!isUserLoggedIn()"
                        id="btn-register" 
                        type="button" 
                        class="btn text-light bg-red rounded-pill"
                        >Register
                    </button>
                </router-link>

                <!-- Disconnect Btn -->
                <button v-if="isUserLoggedIn()"
                    id="btn-disconnect" 
                    type="button" 
                    class="btn text-light bg-red rounded-pill"
                    @click.prevent="logout()"
                    >Disconnect
                </button>
            </div>
        </div>
        </div>
    </header>
</template>

<style scoped>

</style>