<script>
// Import Register
import Register from './Register.vue';

// Export Landing component
export default {
    name: "Landing",
    components: { Register },
    // If user is auth, redirect to home
    mounted: function () {
        if (this.$store.state.isUserAuth) {
            this.$router.push("/home")
        }
    },
}

</script>

<template>
    
    <div class="container">
        <div class="align-items-center text-center">
            <h1>Welcome to Groupomania</h1>   
            <router-link to="/login" class="btn btn-dark rounded-pill">Login now</router-link>
            <div class="registration-login-form">
                <Register></Register>
            </div>
        </div>
    </div>

</template>


<style scoped>
</style>