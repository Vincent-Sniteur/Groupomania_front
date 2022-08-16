<script>
export default {
    name: 'FormUser',
}


</script>

<template>
        <!-- FORM WRAP -->
        <form class="form-wrap">
          <div class="form-row">
            <div class="form-item">
              <label for="user-name" class="rl-label">Full Name</label>
              <input 
                type="text" 
                id="user-name" 
                name="name" 
                maxlength="40"
                v-model="this.$store.state.user.username">
            </div>
          </div>

          <div class="form-row">
            <!-- Description User -->
            <div class="form-item">
              <label for="user-description" class="rl-label">Description</label>
              <textarea name="description" id="user-description" placeholder="Added a short description of yourself..." maxlength="100">{{this.$store.state.user.bio}}</textarea>
            </div>

            <!-- User Avatar -->
            <div class="form-item position-absolute">
                <label for="topic_description" class="rl-label">Avatar</label>
                

                <!-- Show Avatar -->
                <div class="show-avatar">
                  <img :src="this.$store.state.user.avatar" id="show-user-avatar" alt="User Avatar">

                  <!-- Button to upload image -->
                  <input id="new-user-avatar" type="file">
                  <label for="new-user-avatar">
                    <i class="fa fa-upload"></i>
                  </label>
                </div>
            </div>
          </div>

          
          

          <!-- BUTTONS -->
          <div class="form-actions right">

            <!-- Cancel Button -->
            <router-link to="/home">
              <button type="button" id="cancel-btn" class="button rounded-pill">Cancel</button>
            </router-link>

            <!-- Confirm Btn -->
            <button type="submit" id="submit-profil" class="button blue ms-5 rounded-pill">Confirm</button>
          </div>
        </form>
        <!-- FORM -->
</template>



<style scoped>
.form-item {
    margin-bottom: 30px;
}
.rl-label {
    font-weight: 700;
}
label {
    display: block;
    color: #363636;
    font-size: .6875em;
    text-transform: uppercase;
}
input[type="text"] {
    height: 46px;
    padding: 0 20px;
    border-radius: 200px;
    width: 100%;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #363636;
    font-size: .8125em;
}
input[type=file] {
    display: none;
}
.form-row {
    margin-top: 20px;
}
.form-row:after {
    content: '';
    display: table;
    clear: both;
}
textarea {
    min-height: 160px;
    padding: 12px 20px;
    border-radius: 24px;
    width: 100%;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #363636;
    font-size: .8125em;
}
.form-actions {
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;
}
.form-actions.right {
    justify-content: flex-end;
}

.form-actions .button:last-child {
    margin-right: 0;
}

.form-actions .button {
    margin-right: 12px;
}
.button.blue {
    background-color: #1c95f3;
}
.button {
    display: inline-block;
    height: 46px;
    padding: 0 30px 0 30px;
    background-color: #363636;
    color: #fff;
    font-size: .6875em;
    font-weight: 800;
    line-height: 46px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
}
.button:hover {
    background-color: #00c400;
}
.show-avatar {
    position: relative;
    left: 5%;
    top: 0px;
}
.show-avatar img{
    width: 150px;
    height: 150px;
    border-radius: 100px;
}
.show-avatar label {
    position: absolute;
    top: 70%;
    left: 65%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1c95f3;
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.show-avatar label:hover {
    background-color: #00c400;
}

</style>