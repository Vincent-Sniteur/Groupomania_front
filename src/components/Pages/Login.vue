<script>
import store from '../../store'

const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env
const fetchURL = 'http://' + VITE_SERVER_URL + ':' + VITE_SERVER_PORT + '/'

// Data component
const data = () => {
    return {
      email: "",
      password: "",
    }
}

// Export Login component
export default {
  name: 'Login',
  data,

  // Methods for Login
  methods: {
    formUserValidity,
  },

  // Watch data put in form
  watch: {
    email: function () {
      // Check email format with regex
      if (this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        return true
      } else {
        isFormEmpty()
      }
    },
    password: function () {
      // Check password format length
      if (this.password.length >= 8) {
        return true
      } else {
        passwordNotValid()
      }
    },
  },
}

// Function formUser for login user with email and password in database
// Get token & userId in response and save in localStorage & store
function formUserValidity(email, password) {
  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  }
  // Fetch login
  fetch(fetchURL + "auth/login", authOptions)
    // Return response in json
    .then((res) => {
      if (res.ok) return res.json()
    })
    // Save token & userId in localStorage & store user in store
    .then((res) => {
      // Save token & userId in localStorage
      localStorage.setItem("token", res.token)
      localStorage.setItem("userId", res.userId)
      
      // Send user information in store
      store.dispatch('getUserInfos', {
        userId: res.userId,
        token: res.token,
        email: res.email,
        username: res.username,
        role: res.role,
        bio: res.bio,
        avatar: res.avatar,
        location: res.location,
        numberOfPosts: res.numberOfPosts,
        numberOfLikes: res.numberOfLikes,
        numberOfLikesReceived: res.numberOfLikesReceived,
        isAdmin: res.isAdmin,
        isBanned: res.isBanned,
        status: res.status,
        messages: res.messages,
      })

      // // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(this.$store.state))
      
      // Verify if token is in localStorage
      let tokenInCache
      while (tokenInCache == null) {
        tokenInCache = localStorage.getItem("token")
      }

      // Success message
      sucessLogin()
      // Redirect to home page after 3 seconds if login success
      setTimeout(() => {
        this.$router.push("/home")
      }, 3000)
    })
    // Catch error if login failed and display error message
    .catch(() => {
      isFormIncorrect()
    })
}

// Sucess message for Login
function sucessLogin() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-success")
  errorLog.textContent = "You are connected ! You will be redirected in 3 seconds."
}

// ERROR FORM MESSAGE

// Error message if password length is less than 8 characters
function passwordNotValid() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Password must be at least 8 characters"
}

// Error message if the email or password are empty or incorrect
function isFormEmpty() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Email or password are required"
}

// Error if the email or password are incorrect or not found in the database
function isFormIncorrect() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Email or password incorrect"
}
</script>


<template>
    <main class="form-signin w-100 m-auto">
        <form>
            <img class="mx-auto d-block" src="../img/icon-left-font-monochrome-black.svg" alt="" width="172" height="172">
            <h1 class="h3 mb-1 fw-normal text-center">Access your account</h1>
            <!-- Email Adress -->
            <div class="form-floating">
                <input 
                  type="email" 
                  v-model="email" 
                  class="form-control" 
                  id="email" 
                  placeholder="name@example.com"
                  required="required"
                  @click="errorMessage = ''">
                <label for="email">Email address</label>
            </div>
            <!-- Password -->
            <div class="form-floating mb-3">
                <input 
                  type="password" 
                  v-model="password" 
                  class="form-control" 
                  id="password" 
                  placeholder="Password" 
                  required="required">
                <label for="password">Password</label>
            </div>
            
            <!-- Submit Button -->
            <button 
              id="login-submit-btn" 
              class="w-100 btn btn-lg bg-red" 
              type="submit"
              :disabled="email && password == ''"
              @click.prevent="() => formUserValidity(this.email, this.password)"
              >Sign in
            </button>

            <p id="login-error" class="alert"></p>
        </form>
    </main>
</template>


<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>