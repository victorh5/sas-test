export const state = () => ({
  information: {}
})

export const mutations = {
  login (state, data) {
    state.information = data
  },
  logout (state) {
    state.information = {}
  }
}
