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

// Export Register component
export default {
  name: 'Register',
  data,
  // If user is auth, redirect to home
  mounted: function () {
    if (this.$store.state.isUserAuth) {
      this.$router.push("/home")
    }
  },

  // Methods for Register
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
        isPasswordValid()
      }
    },
  },
}

// Function formUser for register user with email and password
function formUserValidity(email, password) {
  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  }
  fetch(fetchURL + "auth/register", authOptions)
    // Return response in json
    .then((res) => {
      if (res.ok) return res.json()
    })
    // Save token & userId in localStorage & store user in store
    .then((res) => {
      // Save token & userId in localStorage
      localStorage.setItem("token", res.token)
      localStorage.setItem("userId", res.userId)


      // Stringify user in localStorage
      const userInfo = JSON.stringify(res)
      // Save user in localStorage
      localStorage.setItem("user", userInfo)
      
      // Send res in store user
      this.$store.commit("setUser", res)
      
      // Verify if token is in localStorage
      let tokenInCache
      while (tokenInCache == null) {
        tokenInCache = localStorage.getItem("token")
      }

      // Redirect to Home page
      this.$router.push("/home")
    })
    // Catch error if login failed and display error message
    .catch((err) => {
      isFormIncorrect()
    })
}


// ERROR FORM MESSAGE

// Error message if password length is less than 8 characters
function isPasswordValid() {
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
            <h1 class="h3 mb-1 fw-normal text-center">Create a new account</h1>
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
              id="register-submit-btn" 
              class="w-100 btn btn-lg bg-red" 
              type="submit"
              :disabled="email && password == '' || password.length < 8 || email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) == null"
              @click.prevent="() => formUserValidity(this.email, this.password)"
              >Register
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
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>