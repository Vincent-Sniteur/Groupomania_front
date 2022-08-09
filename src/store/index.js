
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    UserId: '',
    Token: '',
    Email: '',
    Username: '',
    Role: '',
    Bio: '',
    Avatar: '',
    Location: '',
    NumberOfPosts: '',
    NumberOfLikes: '',
    NumberOfLikesReceived: '',
    IsAdmin: false,
    IsBanned: false,
    Status: '',
    Messages: [],
    isUserAuth: false,
  },

  // Getters are functions that return a value from the store state.
  // They are similar to computed properties in Vue components.
  getters: {
    user(state) {
      return state.user
    },
  },

  // Get data from backend
  mutations: {
    setToken(state, Token) {
      state.Token = Token
      if (Token) {
        state.isUserAuth = true
      } else {
        state.isUserAuth = false
      }
    },
    setUserId(state, UserId) {
      state.UserId = UserId
    },
    setEmail(state, Email) {
      state.Email = Email
    },
    setUsername(state, Username) {
      state.Username = Username
    },
    setRole(state, Role) {
      state.Role = Role
    },
    setBio(state, Bio) {
      state.Bio = Bio
    },
    setAvatar(state, Avatar) {
      state.Avatar = Avatar
    },
    setLocation(state, Location) {
      state.Location = Location
    },
    setNumberOfPosts(state, NumberOfPosts) {  
      state.NumberOfPosts = NumberOfPosts
    },
    setNumberOfLikes(state, NumberOfLikes) {
      state.NumberOfLikes = NumberOfLikes
    },
    setNumberOfLikesReceived(state, NumberOfLikesReceived) {
      state.NumberOfLikesReceived = NumberOfLikesReceived
    },
    setIsAdmin(state, IsAdmin) {
      state.IsAdmin = IsAdmin
    },
    setIsBanned(state, IsBanned) {
      state.IsBanned = IsBanned
    },
    setStatus(state, Status, isUserAuth) {
      state.Status = Status
      if (isUserAuth === true) {
        state.Status = 'Online'
      } else {
        state.Status = 'Offline'
      }
    },
    setMessages(state, Messages) {
      state.Messages = Messages
    },
  },

  // Put to the store the user data received from the backend
  actions: {
    setToken({ commit }, Token) {
      commit("setToken", Token)
    },
    setUserId({ commit }, UserId) {
      commit("setUserId", UserId)
    },
    setEmail({ commit }, Email) {
      commit("setEmail", Email)
    },
    setUsername({ commit }, Username) {
      commit("setUsername", Username)
    },
    setRole({ commit }, Role) {
      commit("setRole", Role)
    },
    setBio({ commit }, Bio) {
      commit("setBio", Bio)
    },
    setAvatar({ commit }, Avatar) {
      commit("setAvatar", Avatar)
    },
    setLocation({ commit }, Location) {
      commit("setLocation", Location)
    },
    setNumberOfPosts({ commit }, NumberOfPosts) {
      commit("setNumberOfPosts", NumberOfPosts)
    },
    setNumberOfLikes({ commit }, NumberOfLikes) {
      commit("setNumberOfLikes", NumberOfLikes)
    },
    setNumberOfLikesReceived({ commit }, NumberOfLikesReceived) {
      commit("setNumberOfLikesReceived", NumberOfLikesReceived)
    },
    setIsAdmin({ commit }, IsAdmin) {
      commit("setIsAdmin", IsAdmin)
    },
    setIsBanned({ commit }, IsBanned) {
      commit("setIsBanned", IsBanned)
    },
    setStatus({ commit }, Status) {
      commit("setStatus", Status)
    },
    setMessages({ commit }, Messages) {
      commit("setMessages", Messages)
    },
  },
  modules: {},
})

export default store