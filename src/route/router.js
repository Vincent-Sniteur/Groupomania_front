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
        { path: '/home', component: Home }, // Add security for only user connected
        { path: '/login', component: Login }, // if user already logged, redirect to home
        { path: '/register', component: Register }, // if user already logged, redirect to home
        { path: '/edit-profil', component: EditProfil },
        { path: '/contact', component: Contact },
    ]
})

// Router Guard for security
const publicPaths = ['/', '/login', '/register', '/contact']

// Router security status
router.beforeEach((to, from, next) => {
    // Check if user is in public path
    if (publicPaths.includes(to.path)) {
        next()
    } else { // If user is not in public path check if user is logged
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        if (user && token) {
            next() // if user is logged, go to the page requested
        } else {
            next('/') // Redirect to landing page
        }
    }
})


// Export router
export { router }