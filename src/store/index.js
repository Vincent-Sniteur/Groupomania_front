// Import VUEX
import { createStore } from 'vuex'

const user = localStorage.getItem('user')
const token = localStorage.getItem('token') || null


// Create a new store instance.
const store = createStore({
  state: {
    user: user ? JSON.parse(user) : null,
    token: token,
    isUserAuth: (user && token) ? true : false,
    // status of user, if isUserAuth is true, user is connected
    status: (user && token) ? 'Online' : 'Offline',
  },

  // Getters are functions that return a value from the store state.
  // They are similar to computed properties in Vue components.
  getters: {
    // Getters all the user's data
    getUser: (state) => {
      return {
        user: state.user
      }
    },
  },

  // Get data from backend
  mutations: {
    setUser(state, user) {
      state.user = user,
      state.isUserAuth = true,
      state.token = user.token,
      state.status = "Online"
    },
    logout(state) {
      state.user = null,
      state.isUserAuth = false,
      state.token = null,
      state.status = "Offline"
    },
    setAvatar(state, avatar) {
      state.user.avatar = avatar
    },
},

  // Put to the store the user data received from the backend
  actions: {
    logout({ commit }) {
      commit('logout')
    },
  },
})


// Export the store
export default store