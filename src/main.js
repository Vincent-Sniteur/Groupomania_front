import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import store from './store/index.js'

// Import Router
import { router } from './route/router.js'

// Import App.vue
import App from './App.vue' // Import App.vue

// Create the app & Import the App in ID App
const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(store)
app.mount('#app')