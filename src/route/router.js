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
import Admin from '../components/Pages/AdminPage.vue' // Import AdminPage
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
        { path: '/profil', component: Profil, meta: { requiresAuth: true } },
        { path: '/new-profil', component: NewAccount, meta: { requiresAuth: true } },
        { path: '/edit-profil', component: EditProfil, meta: { requiresAuth: true } },
        { path: '/contact', component: Contact },
        { path: '/admin', component: Admin, meta: { requiresAuth: true, requiresAdmin: true } } // For admin only (security)
    ]
})
// User page if logged
// /home, /profil, /new-profil, /edit-profil, admin

// User page if not logged
// /, /login, /register

// if User logged and admin
// /admin

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
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

    // If user not logged or as a valide token > redirect to landing page
    if (requiresAuth && !isTokenValide()) {
        next('/')
    }

    // Admin page only for admin > Check if the user is admin & redirect to landing page if not
    // if user requiresAdmin = true = requiresAuth already true
    if (requiresAdmin && !isAdmin()) {
        next('/')
    }

    // if user already logged, redirect to home
    if (to.path === '/login' && isTokenValide()) {
        next('/home')
    }
    if (to.path === '/register' && isTokenValide()) {
        next('/home')
    }
    if (to.path === '/' && isTokenValide()) {
        next('/home')
    }

    // User is logged & as a valide token > Access to the private page
    else {
        next()
    }
})


//  Check if the token exist & valide 
function isTokenValide() {
    const token = localStorage.getItem('token') // TODO : Add backend check with promise
    return token === "Mon super token"
}

// Check if the user is admin
function isAdmin() {
    const token = localStorage.getItem('token') // TODO : Add backend check with promise
    return token === "Mon super token"
}

// Alert error
function alertError() {
    alert('Vous n\'avez pas accès à cette page')
}


// Export router
export { router }