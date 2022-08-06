<script>
// Data component
const data = () => {
    return {
        email: 'a@live.fr',
        password: '0',
    }
}

// Check if the email & password are correct and redirect to the home page
function checkLoginData() {
  // Check if the email & password are correct or will return errorFormMessage
  if (this.email !== "a@live.fr") throw isFormIncorrect()
  if (this.password !== "0") throw isFormIncorrect()

  // TODO : Temporary add token to local storage
  const token = "Mon super token"
  localStorage.setItem('token', token)

  // Redirect to the home page if the email & password are correct
  this.$router.push('/home')
}



// Export Login
export default {
  name: 'Login',
  data,
  methods : {
    checkLoginData,
  }, // End methods
  watch: {
    email(val) {
      this.email = val
      // Check if the email are empty
      if (val === "") {
        isFormEmpty()
      }
      // Check if the email are correct by regex
      if (!val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        isFormIncorrect()
      }
    },
    password(val) {
      this.password = val
      // Check if the password are empty
      if (val === "") {
        isFormEmpty()
      }
      // Check if the password are under 8 characters
      if (val.length < 8) {
        isPasswordValid()
      }
    }
  } // End watch
} // End export


// ERROR FORM MESSAGE

// Error message if password length is less than 8 characters
function isPasswordValid() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Password must be at least 8 characters"

  // // Add timer to remove the error message
  if (errorLog.classList.contains("alert", "alert-danger")) {
    setTimeout(() => {
      errorLog.classList.remove("alert", "alert-danger")
      errorLog.textContent = ""
    }, 4000)
  }
}

// Error message if the email or password are empty
function isFormEmpty() {
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Email or password are required"

  // Add timer to remove the error message
  if (errorLog.classList.contains("alert", "alert-danger")) {
    setTimeout(() => {
      errorLog.classList.remove("alert", "alert-danger")
      errorLog.textContent = ""
    }, 3000)
  }
}

// Error connection message if the email & password are incorrect or empty
function isFormIncorrect() {
  // Error message
  const errorLog = document.getElementById("login-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "Email or password incorrect"

  // Add timer to remove the error message
  if (errorLog.classList.contains("alert", "alert-danger")) {
    setTimeout(() => {
      errorLog.classList.remove("alert", "alert-danger")
      errorLog.textContent = ""
    }, 3000)
  }
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
                  required="required">
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
            <button class="w-100 btn btn-lg bg-red" type="submit" @click.prevent="checkLoginData">Sign in</button>

            <p id="login-error"></p>
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