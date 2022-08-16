<script>
const user = JSON.parse(localStorage.getItem('user'));
// Export
export default {
    name: 'HomeProfil',
}
</script>

<template>

<!-- Profil -->
<div class="col-md-3 mb-2">
    <div class="content-center text-center porfile-content">
        <!-- User avatar display via store -->
        <div class="photo-container">
            <img :src="this.$store.state.user.avatar" id="user-profil-picture" alt="User Avatar" width="100" height="100">
        </div>
        <!-- Username display via store -->
        <h3 class="title" id="user-name">{{this.$store.state.user.username}}</h3>
        <!-- User bio display via store -->
        <p class="category" id="user-description">{{ this.$store.state.user.bio }}</p>
        <!-- User status display via store -->
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