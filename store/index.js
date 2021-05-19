export const state = () => ({
  repoDash: {
    repos: [1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
    isLoading: true,
    isFailed: true,
  }
})

export const mutations = {
  RESET_ALL: (state) => (state.repoDash = { repos: [], isLoading: true, isFailed: false }),
  SET_REPO_SUCCESS: (state, value) => (state.repoDash = value),
  SET_REPO_FAILED: (state) => (state.repoDash.isFailed = true, state.repoDash.isLoading = false),
}

export const actions = {
  async loadRepos({ commit }, query) {
    let response = null
    try {
      response = await this.$api.github.getRepositories(query)
      let value = { repos: [...response.data.items], isLoading: false, isFailed: false }
      commit('SET_REPO_SUCCESS', value)

    } catch (e) {
      commit('SET_REPO_FAILED')
    }
  },
}
