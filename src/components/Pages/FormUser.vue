<script>
import fetchURL from '../services/fetch'

// Data component
const data = () => {
    return {
        username: "",
        bio: "",
        avatar: "",
        oldAvatar: "",
    }
}

// Export
export default {
    name: 'FormUser',
    data,
    methods: {
        uploadImage,
        formUpdateUser,
    },
}

// Upload image & preview it in the form before sending it to the server
function uploadImage() {
    // Get the file from the input
    const userAvatar = this.$refs.file.files[0]

    // if file is not an image, return
    if (!userAvatar.type.match('image.*')) {
        return alert('Please upload an image')
    }
    // Add limit size max 1Mo
    if (userAvatar.size > 1000000) {
        return alert('Please upload an image less than 1Mo')
    }
    // Preview the image in the DOM
    const reader = new FileReader()
    reader.onload = (e) => {
        this.$store.commit("setAvatar", e.target.result)
        this.avatar = e.target.result
    }
    reader.readAsDataURL(userAvatar)
}

// Send the form to the server
function formUpdateUser(username, bio, avatar, oldAvatar) {
    // If the user has not entered information in the form, stop the function
    if (username == "" && bio == "" && avatar == "") {
      return alert("Please fill in a field or use Cancel.")
    }
    // If the user hat not entered a new username, keep the old one
    if (username == "") {
      username = this.$store.state.user.username
    }
    // If the user hat not entered a new bio, keep the old one
    if (bio == "") {
      bio = this.$store.state.user.bio
    }
    // If the user hat not entered a new avatar, keep the old one
    if (avatar == "") {
        avatar = null
        oldAvatar = this.$store.state.user.avatar
    }
    // Option for the fetch
    const authOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ username, bio, avatar, oldAvatar }),
    }
    // Fetch to the server
    fetch(fetchURL + "auth/edit-users/" + localStorage.getItem("userId"), authOptions)
        // Return response in json
        .then((res) => {
            if (res.ok) return res.json()
        })
        // Save new user in the store & local storage
        .then((res) => {
            // Replace user localstorage with new user data
            const user = JSON.parse(localStorage.getItem("user"))
                user.username = res.username
                user.bio = res.bio
                user.avatar = res.avatar
                localStorage.setItem("user", JSON.stringify(user))
                
            // Send res in store user & alert user
            this.$store.commit("setUser", res)
            this.$store.commit("setAvatar", res.avatar)
            alert("Votre profil a bien été mis à jour")

            // Redirect to Home page
            this.$router.push("/home")
        })
        .catch((error) => {
            console.log(error)
        })
}

</script>

<template>
        <!-- FORM WRAP -->
        <form class="form-wrap">
          <div class="form-row">
            <div class="form-item">
              <label for="username" class="rl-label">Full Name : {{this.$store.state.user.username}} </label>
              <input 
                type="text"
                class="form-control" 
                maxlength="20" 
                placeholder="Add your name..."
                v-model="username">
            </div>
          </div>

          <div class="form-row">
            <!-- Description User -->
            <div class="form-item">
              <label for="description" class="rl-label">Description : {{this.$store.state.user.bio}}</label>
                <input
                    type="text" 
                    v-model="bio"
                    placeholder="Added a short bio of yourself..." 
                    maxlength="50">
            </div>

            <!-- User Avatar -->
            <div class="form-item position-absolute">
                <label for="topic_description" class="rl-label">Avatar</label>
                

                <!-- Show Avatar -->
                <div class="show-avatar">
                  <img :src="this.$store.state.user.avatar" id="show-user-avatar" alt="User Avatar">

                  <!-- Btn Upload new Avatar -->
                  <input 
                    id="avatar"
                    type="file"
                    ref="file"
                    label="Avatar"
                    name="avatar"
                    accept="image/png, image/jpeg, image/jpg"
                    :v-model="avatar"
                    @change="uploadImage()">
                  <label for="avatar">
                    <i class="fa fa-upload"></i>
                  </label>
                  <p class="text-danger">Max Size 1 MO</p>
                </div>
            </div>
          </div>

          <!-- BUTTONS ACTION FORM -->
          <div class="form-actions right">

            <!-- Cancel Button -->
            <router-link to="/home">
              <button type="button" id="cancel-btn" class="button rounded-pill">Cancel</button>
            </router-link>

            <!-- Confirm Btn -->
            <button 
              id="edit-user-submit" 
              class="button blue ms-5 rounded-pill"
              type="submit"
              @click.prevent="() => formUpdateUser(this.username, this.bio, this.avatar)">
              Sign in
            </button>
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
    border-radius: 50%;
    object-fit: cover;
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
.show-avatar p {
    font-size: 15px;
    position: absolute;
    font-weight: 600;
}

</style>