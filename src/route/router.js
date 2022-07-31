// Import the stylesheet bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import all page & component for the router
import Login from '../components/Pages/Login.vue' // Import Login
import Home from '../components/Pages/Home.vue' // Import Home
import Register from '../components/Pages/Register.vue' // Import Register
import Profil from '../components/Pages/ProfilPage.vue' // Import ProfilPage
import NewAccount from '../components/Pages/NewAccount.vue' // Import NewAccount
import EditProfil from '../components/Pages/EditProfil.vue' // Import EditProfil
import Landing from '../components/Pages/Landing.vue' // Import Landing

// Import router fonction
import { createRouter, createWebHistory } from 'vue-router'


// Router
const router = createRouter({ 
    history: createWebHistory(),
    routes: [
        { path: '/', component: Landing }, // Landing page for user & if user already logged, redirect to home page
        { path: '/home', component: Home }, // Add security for only user connected
        { path: '/login', component: Login }, // if user already logged, redirect to home
        { path: '/register', component: Register }, // if user already logged, redirect to home
        { path: '/profil', component: Profil },
        { path: '/new-profil', component: NewAccount },
        { path: '/edit-profil', component: EditProfil }
        // { path: '/admin', component: Admin } // For admin only (security)
    ]
})

export { router }