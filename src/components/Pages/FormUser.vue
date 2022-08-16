<script>
const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env
const fetchURL = 'http://' + VITE_SERVER_URL + ':' + VITE_SERVER_PORT + '/'

// Data component
const data = () => {
    return {
      username: "",
      bio: "",
      avatar: "",
    }
}

// Export
export default {
    name: 'FormUser',
    data,
    methods: {
      formUpdateUser,
    },
}

function formUpdateUser(username, bio, avatar) {
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
      avatar = this.$store.state.user.avatar
    }

    const authOptions = {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ username, bio, avatar })
    }
    fetch(fetchURL + "auth/users/" + localStorage.getItem("userId"), authOptions)
        // Return response in json
        .then((res) => {
            if (res.ok) return res.json()
        })
        // Save token & userId in localStorage & store user in store
        .then((res) => {
            // Save token & userId in localStorage
            localStorage.setItem("userId", res.userId)

            // Replace user localstorage with new user data
                const user = JSON.parse(localStorage.getItem("user"))
                user.username = res.username
                user.bio = res.bio
                user.avatar = res.avatar
                localStorage.setItem("user", JSON.stringify(user))
            
            // Send res in store user
            this.$store.commit("setUser", res)
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
                id="username"
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
                    id="bio" 
                    placeholder="Added a short bio of yourself..." 
                    maxlength="50">
            </div>

            <!-- User Avatar -->
            <div class="form-item position-absolute">
                <label for="topic_description" class="rl-label">Avatar</label>
                

                <!-- Show Avatar -->
                <div class="show-avatar">
                  <img :src="this.$store.state.user.avatar" id="show-user-avatar" alt="User Avatar">

                  <!-- TODO Button to upload image & change in DB / localstorage & update store -->
                  <input id="avatar" type="file" name="avatar">
                  <label for="avatar">
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