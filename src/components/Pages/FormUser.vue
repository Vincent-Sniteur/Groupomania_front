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
              <input type="text" id="user-name" name="name" placeholder="Your name... ( Require )" required="required" class="require">
            </div>

            <div class="form-item">
              <label for="user-location" class="rl-label">Location</label>
              <input type="text" id="user-location" name="location" placeholder="Your Location... ( Require )" required="required" class="require">
            </div>

            <div class="form-item">
              <label for="user-website" class="rl-label">Website</label>
              <input type="text" id="user-website" name="website" placeholder="Your Website...">
            </div>

            <div class="form-item">
              <label for="user-github" class="rl-label">Your Github</label>
              <input type="text" id="user-github" name="github" placeholder="Your Github Username...">
            </div>

            <div class="form-item">
              <label for="user-twitter" class="rl-label">Your Twitter</label>
              <input type="text" id="user-twitter" name="twitter" placeholder="Enter your @...">
            </div>
          </div>

          <div class="form-row">
            <!-- Description User -->
            <div class="form-item">
              <label for="user-description" class="rl-label">Description</label>
              <textarea name="description" id="user-description" placeholder="Added a short description of yourself... ( Require )"></textarea>
            </div>

            <!-- User Avatar -->
            <div class="form-item">
                <label for="topic_description" class="rl-label">Avatar</label>
                <input id="user-avatar" type="file">
                <label for="user-avatar" class="rl-label button rounded-pill">Add image</label>
            </div>
          </div>

          <!-- BUTTONS -->
          <div class="form-actions right">
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
.require::-webkit-input-placeholder {
    color: #FD2D01;
}
input[type=file] {
    display: none;
}
label+input {
    margin-top: 10px;
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
</style>