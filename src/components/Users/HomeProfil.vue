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
            <img id="user-profil-picture" src="{{this.$store.state.user.avatar}}" alt="User Avatar" width="100" height="100">
        </div>
        <!-- Get username in store & display -->
        <h3 class="title" id="user-name">{{this.$store.state.user.username}}</h3>
       
        <p class="category" id="user-description">{{ this.$store.state.user.bio }}</p>
        <p class="bg-success" id="user-status">{{ this.$store.state.status }}</p>


        <!-- View profil-->
        <router-link to="/edit-profil">
            <button class="btn btn-dark rounded-pill">Edit Profil</button>
        </router-link>
        
    </div>
</div>

</template>


<style scoped>
#user-status {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 5px 10px;
    border-radius: 30px;
    color: #fff;
    width: fit-content;
    margin: 5px auto;
}
</style>