export const state = () => ({
  repoDash: {
    repos: [],
    isLoading: true,
    isFailed: true,
    total: 0
  }
})

export const mutations = {
  RESET_ALL: (state) => (state.repoDash = { repos: [], isLoading: true, isFailed: false, total: 0 }),
  SET_REPO_SUCCESS: (state, value) => (state.repoDash = value),
  SET_REPO_FAILED: (state) => (state.repoDash.isFailed = true, state.repoDash.isLoading = false),
}

export const actions = {
  async loadRepos({ commit }, query) {
    let response = null
    try {
      response = await this.$api.github.getRepositories(query)
      let value = { repos: [...response.data.items], isLoading: false, isFailed: false, total: response.data.total_count }
      commit('SET_REPO_SUCCESS', value)

    } catch (e) {
      commit('SET_REPO_FAILED')
    }
  },
}
