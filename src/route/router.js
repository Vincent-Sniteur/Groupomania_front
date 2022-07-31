// Import the stylesheet bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import all page & component for the router
import Login from '../components/Pages/Login.vue' // Import Login
import Home from '../components/Pages/Home.vue' // Import Home
import Register from '../components/Pages/Register.vue' // Import Register
import Profil from '../components/Pages/ProfilPage.vue' // Import ProfilPage

// Import router fonction
import { createRouter, createWebHistory } from 'vue-router'


// Router
const router = createRouter({ 
    history: createWebHistory(),
    routes: [
        // { path: '/', component: App }, LANDING PAGE
        { path: '/home', component: Home }, // Add security for only user connected
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/profil', component: Profil }
        // { path: '/admin', component: Admin } // For admin only (security)
    ]
})

export { router }