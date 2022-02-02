export default {
  state: {
    isAdmin: false,
    isAuthenticated: false,
    authenticatedUser: {},
  },
  mutations: {
    USER_AUTHENTICATED(state, payload) {
      state.authenticatedUser = payload;
      state.isAuthenticated = true;
      state.isAdmin = payload.isAdmin;
    },
    LOGOUT(state) {
      state.isAdmin = false;
      state.isAuthenticated = false;
      state.authenticatedUser = null;
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit("USER_AUTHENTICATED", payload);
    },
    logout(context) {
      context.commit("LOGOUT");
    },
  },
  getters: {
    isAdmin: (state) => {
      return state.isAdmin;
    },
    isAuthenticated: (state) => {
      return state.isAuthenticated;
    },
    authenticatedUser: (state) => {
      return state.authenticatedUser;
    },
  },
};
