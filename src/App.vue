<script setup>
// Import Navbar component
import Navbar from './components/UI/Navbar.vue';
// Import Footer component
import Footer from './components/UI/Footer.vue';

</script>

<template>
<!-- Import FontAwesome -->
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <body>

    <!-- Navbar -->
    <Navbar />


    <!-- Router -->
    <RouterView>
      
    </RouterView>


    <!-- Footer -->
    <Footer> </Footer>
    
  </body>
</template>

<!-- Global Style -->
<style>
/* Import Lato fonts */
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* Fonts Lato */
body {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  background-color: #f3f3f3;
}
* {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
}
/* Btn color red */
.bg-red {
    background-color: #FD2D01;
    font-weight: 700;
}

</style>
