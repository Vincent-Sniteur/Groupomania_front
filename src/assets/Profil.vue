<script>
export default {
    name: 'Profil',
}
</script>

<template>

<!-- Profil -->
<div class="col-md-3 mb-2">
    <div class="content-center text-center porfile-content">
        <div class="photo-container">
            <img src="./img/profil.png" alt="IMG DE PROFIL" width="100" height="100">
        </div>
        <h3 class="title">John Doe</h3>
        <p class="category">Developer</p>
        <router-link to="mailto:{#AddFeature}" class="btn btn-dark">Contact</router-link>
        
    </div>
</div>

</template>


<style scoped>
</style>