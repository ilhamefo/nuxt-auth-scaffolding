export const state = () => ({
  loading: false,
  err: [],
  messages: ''
})

export const actions = {
  async login({ commit }, credentials) {

    const { email, password } = credentials;

    this.$auth.loginWith("laravelSanctum", {
      data: {
        email: email,
        password: password,
      },
    });
  },

  register({ commit, dispatch }, credentials) {

    dispatch('getCSRF').then(() => {
      const { name, email, password, password_confirmation } = credentials;

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirmation", password_confirmation);

      this.$axios
        .post("/api/v1/register", formData)
        .then((resp) => {
          dispatch('login', { email: email, password: password })
          commit('messages', resp.data.messages)
          commit('err', [])
        })
        .catch((err) => {
          commit('err', err.response.data)
        });
    });

  },

  getCSRF() {
    return this.$axios.get("/sanctum/csrf-cookie");
  },
}

export const mutations = {
  err(state, payload) {
    state.err = payload
  },
  messages(state, payload) {
    state.messages = payload
  },
}
