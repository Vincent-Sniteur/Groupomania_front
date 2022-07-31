<script>
export default {
    name: "DisplayMessage",
    // ...
}

// add function if heart is clicked then toggle class is-active
// $(function() {
//   $(".heart").on("click", function() {
//     $(this).toggleClass("is-active");
//   });
// });
</script>


<template>
<div class="tab-pane active" id="home" role="tabpanel" aria-expanded="true">
<!-- EXEMPLE MESSAGE NO ATTACHED FILE -->
    <div class="media Tweets post-comment">
        <!-- Profil img -->
        <img id="user-avatar" class="mr-3 rounded-circle img-flex" src="https://picsum.photos/50/50" alt="User Avatar" width="50" height="50">

        <!-- Username -->
        <h5 id="username" class="post-comment-username card-title">Utilisateur 1</h5>

        <!-- Attached file -->
        <div class="post-comment-attach mt-2">
            <!-- <img class="card-img-top mb-1" src="https://picsum.photos/500/500" alt="Attached file"> -->
        </div>

        <!-- Timestamp & User option -->
        <p id="message-info" class="post-comment-timestamp mt-2">25 mins ago
            <!-- Edit button -->
            <router-link to="#" id="edit-btn" class="edit-button">Edit</router-link>
            <!-- Delete button -->
            <router-link to="#" id="delete-btn" class="delete-button">Delete</router-link>
            <!-- Admin button -->
            <router-link to="#" id="ban-btn" class="admin-button">Ban User</router-link>
        </p>
        

        <!-- Message -->
        <p id="user-message" class="post-comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        
        <!-- Post Option-->
        <div class="post-option mb-1">
            <!-- Heart -->
            <div class="placement">
                <div class="heart is-active"></div>
            </div>
        </div>
    </div>
<!-- END EXEMPLE MESSAGE -->

<!-- EXEMPLE MESSAGE WITH ATTACHED FILE -->
    <div class="media Tweets post-comment">
        <!-- Profil img -->
        <img id="user-avatar" class="mr-3 rounded-circle img-flex" src="https://picsum.photos/50/50" alt="User Avatar" width="50" height="50">

        <!-- Username -->
        <h5 id="username" class="post-comment-username card-title">Utilisateur 1</h5>

        <!-- Attached file -->
        <div class="post-comment-attach mt-2">
            <img class="card-img-top mb-1" src="https://picsum.photos/500/500" alt="Attached file">
        </div>

        <!-- Timestamp & User option -->
        <p id="message-info" class="post-comment-timestamp mt-2">25 mins ago
            <!-- Edit button -->
            <router-link to="#" id="edit-btn" class="edit-button">Edit</router-link>
            <!-- Delete button -->
            <router-link to="#" id="delete-btn" class="delete-button">Delete</router-link>
            <!-- Admin button -->
            <router-link to="#" id="ban-btn" class="admin-button">Ban User</router-link>
        </p>
        

        <!-- Message -->
        <p id="user-message" class="post-comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        
        <!-- Post Option ( for futur comment mb-5 )-->
        <div class="post-option mb-1">
            <!-- Heart -->
            <div class="placement">
                <div class="heart is-active"></div>
            </div>
        </div>
    </div>

<!-- END EXEMPLE MESSAGE -->

</div>
</template>

<!-- GLOBAL STYLE IMPORTANT -->
<style>
/* POST */ 
.post-comment {
    background-color: white;
    border-top: 2px solid #4E5166;
    border-bottom: 2px solid #4E5166;
    position: relative;
    padding: 10px 0 20px 0;
}
.post-comment-username {
    color: #363636;
    line-height: 1.5em;
    font-size: 1.1em;
    font-weight: 700;
    text-transform: uppercase;
    margin-inline-start: 3px;
    display: inline;
}
.post-comment-timestamp {
    color: #4E5166;
    font-size: .6875em;
    line-height: 1em;
    margin-inline-start: 3px;
}
.post-comment-text {
    font-size: .875em;
    line-height: 1.8em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 5px;
    margin-inline-end: 0px;
}
.edit-button {
    margin-left: 8px;
    color: #4E5166;
    font-weight: 700;
    text-decoration: none;
}
.delete-button {
    margin-left: 8px;
    color: #FD2D01;
    font-weight: 700;
    text-decoration: none;
}
.admin-button {
    margin-left: 8px;
    color: #FD2D01;
    font-weight: 700;
    text-decoration: none;
}

/* ATTACH FILE IMG */
.post-comment-attach img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
}

/* REPLY COMMENT */
.post-reply {
    cursor: pointer;
    position: absolute;
    margin-inline-start: 1%;
}
.reply-btn {
    color: #4E5166;
    font-weight: 700;
    text-decoration: none;
}
.reply-btn:hover {
    color: #FD2D01;
}


/* LIKE BUTTON */
.heart {
    width: 100px;
    height: 100px;
    background: url("../img/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
}
/* If heart = active*/
 .heart.is-active {
	transition-duration: 1s;
	background-position: -2800px 0;
}
.placement {
    cursor: pointer;
    transform: translate(-50%, -50%);
    position: absolute;
    margin-inline-start: 95%;
}
</style>