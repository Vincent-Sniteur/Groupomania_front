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
        { path: '/', redirect: "/home" }, // Add redict to home if user logged
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

// ADD IN BACKEND
// Verify if user is logged or not & if is admin or not ( in local storage for the moment )
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem('token')) {
//             next()
//         } else {
//             next('/login')
//         }
//     }
//     if (to.matched.some(record => record.meta.requiresAdmin)) {
//         if (localStorage.getItem('token')) {
//             if (localStorage.getItem('role') === 'admin') {
//                 next()
//             } else {
//                 next('/home')
//             }
//         } else {
//             next('/login')
//         }
//     }
//     next()
// }
// )


export { router }