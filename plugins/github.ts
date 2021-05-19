import { NuxtAxiosInstance } from '@nuxtjs/axios'

const URL = 'https://api.github.com'

export default (axios: NuxtAxiosInstance) => ({
  getRepositories: (query: string) =>
    axios.get(`${URL}/search/repositories?q=${query}&sort=stars&per_page=30`),
})
