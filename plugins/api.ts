import { Plugin } from '@nuxt/types'
import github from './github'

const apiPlugin: Plugin = ({ $axios }, inject) => {
  const axios = $axios.create()
  inject('api', {
    github: github(axios),
  })
}

export default apiPlugin
