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
import store from '../store'


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
// User page if logged
// /home

// User page if not logged
// /, /login, /register

// if User logged and admin
// #

// All time page logged or not
// /contact, /about




// Router Guard for security

const publicPaths = ['/', '/login', '/register']

// Router security status user before login with public path
router.beforeEach((to, from, next) => {
    if (to.path !== publicPaths) {
        next()
    }
})


// Global security for all privage page after login & check if the token exist & valide
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    // If user not logged or as a valide token > redirect to landing page
    if (requiresAuth && !isTokenValid()) {
        next('/')
    }

    // if user already logged, redirect to home
    if (to.path === '/login' && isTokenValid()) {
        next('/home')
    }
    if (to.path === '/register' && isTokenValid()) {
        next('/home')
    }
    if (to.path === '/' && isTokenValid()) {
        next('/home')
    }

    // User is logged & as a valide token > Access to the private page
    else {
        next()
    }
})


// TODO Check if the token exist & valide with the server (token exist & not expired)
function isTokenValid(state) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const storeToken = store.state.token
    const storeUserId = store.state.userId

    if (token && userId || storeToken && storeUserId) {
        return true
    } else {
        return false
    }
}


// Alert error
function alertError() {
    alert('Une erreur est survenue, veuillez vous reconnecter')
}


// Export router
export { router }