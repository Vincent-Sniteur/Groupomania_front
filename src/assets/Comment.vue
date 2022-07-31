<script>
export default {
    name: 'Comment',
}
</script>


<template>
<!-- COMMENT OPTION FOR THE FUTURE -->

<!-- Comment Div Marging for effect -->
<div class="m-4 media Tweets post-comment">
    <!-- Image de l'utilisateur qui répond -->
    <img id="user-avatar" class="rounded-circle img-flex" src="https://picsum.photos/50/50" alt="User Avatar" width="50" height="50">
    <!-- Nom de l'utilisateur qui répond -->
    <h5 id="username" class="post-comment-username card-title">Utilisateur X</h5>

    <!-- Timestamp & Rport -->
        <p id="message-info" class="post-comment-timestamp mt-2">25 mins ago
            <!-- Edit button -->
            <router-link to="#" id="edit-btn" class="edit-button">Edit</router-link>
            <!-- Delete button -->
            <router-link to="#" id="delete-btn" class="delete-button">Delete</router-link>
            <!-- Admin button -->
            <router-link to="#" id="ban-btn" class="admin-button">Ban User</router-link>
        </p>

    <!-- Message -->
    <p id="user-message" class="post-comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ab rem minima unde mollitia totam expedita cum neque ex dolorum beatae omnis, laborum maiores, voluptas soluta nam deserunt assumenda possimus.</p>

    <!-- Post Option -->
    <div class="post-option mb-5">
        <!-- Heart -->
        <div class="placement">
            <div class="heart is-active"></div>
        </div>
    </div>

</div>

<!-- END COMMENT -->

</template>


<style scoped>
.post-comment {
    background-color: #e9ecef;
    font-size: 0.8em;
}



</style>