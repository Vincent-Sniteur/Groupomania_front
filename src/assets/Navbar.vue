<script>
// Export Navbar component
export default {
    name: 'Navbar',
}

</script>


<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <!-- Name / Logo -->
           <router-link to="/home" class="text-decoration-none text-white">
                <h1>Groupomania</h1>
           </router-link>

            <!-- NavBar -->
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><router-link to="/home" class="nav-link px-2 text-white">Home</router-link></li>
                <li><router-link to="/login" class="nav-link px-2 text-white">Contact</router-link></li>
                <li><router-link to="#" class="nav-link px-2 text-white">About us</router-link></li>
            </ul>
            <!-- Auth Navbar -->
            <div class="text-end">
                <!-- Login Btn -->
                <router-link to="/login">
                    <button id="btn-login" type="button" class="btn btn-outline-light me-2">Login</button>
                </router-link>
                <!-- Register Btn -->
                <router-link to="/register">
                    <button id="btn-register" type="button" class="btn text-light bg-red">Register</button>
                </router-link>
            </div>
        </div>
        </div>
    </header>
</template>

<style scoped>
.bg-red {
    background-color: #FD2D01;
    text-decoration: none;
}
</style>