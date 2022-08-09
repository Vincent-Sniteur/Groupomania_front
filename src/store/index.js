
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      token: localStorage.getItem('token') || null,
      userId: localStorage.getItem('userId') || null,
      isAdmin: localStorage.getItem('isAdmin') || null,
      isAuth: localStorage.getItem('isAuth') || null,
      messages : [],
    }
  },
  getters: {
    getMessages(state) {
      return state.messages
    },
    getThisMessage(state) {
      return state.thisMessage
    }
  },
  // mutations: {
  //   increment (state) {
  //     state.count++
  //   }
  // }
})

export default store