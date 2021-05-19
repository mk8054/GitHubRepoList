<template>
  <div>
    <b-row class="justify-content-around">
      <repo-dash v-for="repo in repos" :key="repo.id" :repo="repo" />
    </b-row>
    <b-row>
      <b-col cols="12" class="w-100">
        <b-card class="full-width">
          <h2 v-if="isLoading" class="text-center">Loading...</h2>
          <div v-if="isFailed">
            <h2 class="text-center">Something Went Wrong :(</h2>
            <p class="text-center">
              Might be API rate limit exceeded (Try in some time)
              <br />
              OR
              <br />
              Check your Internet
            </p>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { get } from 'vuex-pathify'
import RepoDash from './RepoDash.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    RepoDash,
  },
  created() {
    this.$store.commit('RESET_ALL')
  },
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  computed: {
    repos: get('repoDash.repos'),
    isLoading: get('repoDash.isLoading'),
    isFailed: get('repoDash.isFailed'),
  },
  watch: {
    query: {
      immediate: true,
      handler(newVal: any) {
        console.log(newVal)
        this.$store.dispatch('loadRepos', newVal)
      },
    },
  },
})
</script>

<style scoped>
.full-width {
  width: 100%;
  border: 0;
}
</style>
