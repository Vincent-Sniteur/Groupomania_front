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
  // Check if the email & password are correct
  if (this.email !== "a@live.fr") throw new Error('Email is not valid')
  if (this.password !== "0") throw new Error('Password is not valid')

  const token = "Mon super token"
  localStorage.setItem('token', token)

  this.$router.push('/home')
}

// Export Login
export default {
  name: 'Login',
  data,
  methods : {
    checkLoginData
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
                <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com">
                <label for="email">Email address</label>
            </div>
            <!-- Password -->
            <div class="form-floating mb-3">
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                <label for="password">Password</label>
            </div>
            
            <!-- Submit Button -->
            <button class="w-100 btn btn-lg bg-red" type="submit" @click.prevent="checkLoginData">Sign in</button>
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