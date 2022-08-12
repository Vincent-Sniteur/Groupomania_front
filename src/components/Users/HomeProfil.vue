<script>
export default {
    name: 'HomeProfil',
}
</script>

<template>

<!-- Profil -->
<div class="col-md-3 mb-2">
    <div class="content-center text-center porfile-content">
        <div class="photo-container">
            <img id="user-profil-picture" src="../img/profil.png" alt="IMG DE PROFIL" width="100" height="100">
        </div>
        <h3 class="title" id="user-name">John Doe</h3>
        <p class="category" id="user-description">Full Stack Developer</p>


        <!-- View profil-->
        <router-link to="/edit-profil">
            <button class="btn btn-dark rounded-pill">Edit Profil</button>
        </router-link>
        
    </div>
</div>

</template>


<style scoped>
</style>