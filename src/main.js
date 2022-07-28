import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

// Import router fonction
import { createRouter, createWebHistory } from 'vue-router'

// Import the stylesheet bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import base components
import App from './App.vue' // Import App.vue
import Login from './assets/Login.vue' // Import Login.vue
import Home from './assets/Home.vue' // Import News.vue
import Register from './assets/Register.vue' // Import Register.vue




// Router
const router = createRouter({ 
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home }, // Add security for only user connected
        { path: '/login', component: Login },
        { path: '/register', component: Register }
    ]
})

// Create the app & Import the App in ID App
const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')


