<script setup>
// Import Navbar component
import Navbar from './assets/Navbar.vue';
// Import Footer component
import Footer from './assets/Footer.vue';


</script>

<template>
  <body>

    <!-- Navbar -->
    <Navbar />


    <!-- Router -->
    <RouterView>
      
    </RouterView>


    <!-- Footer -->
    <Footer />

  </body>
</template>

<style scoped>
/* Import Lato fonts */
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* Fonts Lato */
body {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
}

</style>
