// Import VUEX
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
    // Getters all the user's data
    getUser: (state) => {
      return {
        UserId: state.UserId,
        Token: state.Token,
        Email: state.Email,
        Username: state.Username,
        Role: state.Role,
        Bio: state.Bio,
        Avatar: state.Avatar,
        Location: state.Location,
        NumberOfPosts: state.NumberOfPosts,
        NumberOfLikes: state.NumberOfLikes,
        NumberOfLikesReceived: state.NumberOfLikesReceived,
        IsAdmin: state.IsAdmin,
        IsBanned: state.IsBanned,
        Status: state.Status,
      }
    },
    // Getters all messages
    getMessages: (state) => {
      return state.Messages
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
    setStatus(state, Status) {
      state.Status = Status
    },
    setMessages(state, Messages) {
      state.Messages = Messages
    },
  },

  // Put to the store the user data received from the backend
  actions: {
    getUserInfos({ commit }, user) {
      console.log(user);
      commit('setStatus', "Online"); // TODO change to "Online" when user is online
      commit('setToken', user.token);
      commit('setUserId', user.userId);
      commit('setEmail', user.email);
      commit('setUsername', user.username);
      commit('setRole', user.role);
      commit('setBio', user.bio);
      commit('setAvatar', user.avatar);
      commit('setLocation', user.location);
      commit('setNumberOfPosts', user.numberOfPosts);
      commit('setNumberOfLikes', user.numberOfLikes);
      commit('setNumberOfLikesReceived', user.numberOfLikesReceived);
      commit('setIsAdmin', user.isAdmin);
      commit('setIsBanned', user.isBanned);
      commit('setMessages', user.messages);
    },
  },
  modules: {},
})

// Export the store
export default store