<script>
// Import Register
import Register from './Register.vue';

// Export Landing component
export default {
    name: "Landing",
    components: { Register }
}

</script>

<template>

<!-- ADD SECURITY IF USER IS LOGGED REDIRECT TO /home -->

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