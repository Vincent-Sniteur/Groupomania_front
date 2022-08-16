<script>
// Import FormUser
import FormUser from './FormUser.vue';

// Export EditProfil
export default {
    name: "EditProfil",
    components: { FormUser },
    // If user is auth, redirect to home
  mounted: function () {
    if (!this.$store.state.isUserAuth) {
      this.$router.push("/")
    }
  },
}

</script>


<template>

<div class="form-box container mt-2">
        <div class="section-title-wrap red">
          <h2 class="section-title">Edit Your Profil</h2>
          <div class="section-title-separator"></div>
        </div>

        <FormUser></FormUser>


</div>

</template>


<style scoped>
.section-title {
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1em;
}
.form-box .section-title-wrap {
    margin-bottom: 30px;
}

.section-title-wrap {
    position: relative;
}
.section-title-wrap .section-title-separator {
    width: 100%;
    height: 1px;
    margin-top: 16px;
    background-color: #dbdbdb;
    position: relative;
}
.section-title-wrap.red .section-title-separator:before {
    background-color: #FD2D01;
}
.section-title-wrap .section-title-separator:before {
    content: '';
    width: 70px;
    height: 3px;
    background-color: #363636;
    position: absolute;
    top: -2px;
    left: 0;
}
</style>