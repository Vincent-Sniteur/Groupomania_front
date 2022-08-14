<script>



// Export
export default {
    name: 'HomeProfil',
}
</script>

<template>

<!-- Profil -->
<div class="col-md-3 mb-2">
    <div class="content-center text-center porfile-content">
        <div class="photo-container">
            <img id="user-profil-picture" src="" alt="User Avatar" width="100" height="100">
        </div>
        <!-- get username in user and display -->
        <h3 class="title">zz</h3>
        <!-- <h3 class="title" id="user-name">{{store.}}</h3> -->
        <p class="category" id="user-description">user bio</p>


        <!-- View profil-->
        <router-link to="/edit-profil">
            <button class="btn btn-dark rounded-pill">Edit Profil</button>
        </router-link>
        
    </div>
</div>

</template>


<style scoped>
</style>