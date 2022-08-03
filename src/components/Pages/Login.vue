<script>
// Export Login component
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: '',
            loading: false,
            show: false,
            showPassword: false,
            showConfirmPassword: false
        }
    },
}

</script>
<template>
    <main class="form-signin w-100 m-auto">
        <form>
            <img class="mx-auto d-block" src="../img/icon-left-font-monochrome-black.svg" alt="" width="172" height="172">
            <h1 class="h3 mb-1 fw-normal text-center">Access your account</h1>
            <!-- Email Adress -->
            <div class="form-floating">
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
                <label for="email">Email address</label>
            </div>
            <!-- Password -->
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password">
                <label for="password">Password</label>
            </div>
            
            <!-- Submit Button -->
            <button class="w-100 btn btn-lg bg-red" type="submit">Sign in</button>
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