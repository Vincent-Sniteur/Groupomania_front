<script>
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
    formUser,
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

// Function formUser for login user with email and password in database
// Get token & userId in response and save in localStorage & store
function formUser(email, password) {
  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  }
  fetch(fetchURL + "auth/login", authOptions)
    .then((res) => {
      if (res.ok) return res.json()
      res.text().then((err) => {
        const { error } = JSON.parse(err)
        this.error = error
        throw new Error(error)
      })
    })
    .then((res) => {
      const token = res.token
      const userId = res.userId
      console.log(res) // TODO
      localStorage.setItem("token", token)
      localStorage.setItem("userId", userId)

      // TODO Store user
      this.$store.dispatch("token", token)
      this.$store.dispatch("userId", userId)
      this.$store.dispatch("isAuth", true)

      let tokenInCache
      while (tokenInCache == null) {
        tokenInCache = localStorage.getItem("token")
      }
      this.$router.push("/home")
    })
    .catch((err) => {
      isFormIncorrect()
    })
}



// // ERROR FORM MESSAGE

// // Error message if password length is less than 8 characters
function isPasswordValid() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Password must be at least 8 characters"

  // // Add timer to remove the error message
  if (errorLog.classList.contains("alert", "alert-danger")) {
    setTimeout(() => {
      errorLog.classList.remove("alert", "alert-danger")
      errorLog.textContent = ""
    }, 5000)
  }
}

// // Error message if the email or password are empty or incorrect
function isFormEmpty() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Email or password are required"

  // Add timer to remove the error message
  if (errorLog.classList.contains("alert", "alert-danger")) {
    setTimeout(() => {
      errorLog.classList.remove("alert", "alert-danger")
      errorLog.textContent = ""
    }, 5000)
  }
}

// // Error if the email or password are incorrect or not found in the database
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
              :disabled="email && password == '' /*|| email && password == ''*/"
              @click.prevent="() => formUser(this.email, this.password)"
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