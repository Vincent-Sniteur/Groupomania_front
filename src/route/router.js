// Import the stylesheet bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import all page & component for the router
import Login from '../components/Pages/Login.vue' // Import Login
import Home from '../components/Pages/Home.vue' // Import Home
import Register from '../components/Pages/Register.vue' // Import Register
import EditProfil from '../components/Pages/EditProfil.vue' // Import EditProfil
import Landing from '../components/Pages/Landing.vue' // Import Landing
import Contact from '../components/Pages/Contact.vue' // Import Contact

// Import router fonction
import { createRouter, createWebHistory } from 'vue-router'


// Router
const router = createRouter({ 
    history: createWebHistory(),
    routes: [
        { path: '/', component: Landing }, // Add redict to home if user logged
        { path: '/home', component: Home, meta: { requiresAuth: true } }, // Add security for only user connected
        { path: '/login', component: Login }, // if user already logged, redirect to home
        { path: '/register', component: Register }, // if user already logged, redirect to home
        { path: '/edit-profil', component: EditProfil, meta: { requiresAuth: true } },
        { path: '/contact', component: Contact },
    ]
})

// Router Guard for security
const publicPaths = ['/', '/login', '/register']

// Router security status user before login with public path
router.beforeEach((to, from, next) => {
    if (to.path !== publicPaths) {
        next()
    }
})


// Export router
export { router }