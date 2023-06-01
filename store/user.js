export const state = () => ({
  information: {},
  token: ''
})

export const mutations = {
  login (state, data) {
    state.information = data
    state.token = 'Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8'
  },
  logout (state) {
    state.information = {}
    state.token = ''
  }
}

export const getters = {
  userIsLogged (state) {
    return state.token
  }
}
