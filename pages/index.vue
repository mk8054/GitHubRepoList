<template>
  <b-container>
    <div class="text-center pt-5 mt-5">
      <h1 class="title">GitHub Repos</h1>
      <div class="links">
        <b-form-checkbox
          id="checkbox-1"
          v-model="hideAngular"
          @change="hideAngularValue"
          value="true"
          unchecked-value="false"
        >
          Hide Angular
        </b-form-checkbox>
      </div>
    </div>
    <b-row>
      <b-col>
        <b-tabs
          v-model="tabIndex"
          class="mt-5 shadow-lg border-0"
          card
          justified
        >
          <b-tab
            v-for="(element, index) in elements"
            :key="index"
            :title="element"
          >
            <github-repos v-if="tabIndex === index" :query="element" />
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import GithubRepos from '~/components/GithubRepos.vue'

export default Vue.extend({
  components: { GithubRepos },
  data() {
    return {
      hideAngular: '',
      elements: ['vue', 'nuxt', 'angular'],
      tabIndex: 0,
    }
  },
  methods: {
    hideAngularValue() {
      if(this.hideAngular === 'true'){
        return this.elements.pop()
      }
      this.elements.push("angular")
    },
  },
})
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.card-header {
  background: #fff;
  text-align: center;
  padding: 0;
}
.card-header-tabs {
  margin: 0;
}
.nav-tabs .nav-link {
  border: 0;
  padding: 15px;
}

.nav-tabs .nav-link.active {
  background: #526488;
  border-radius: 0;
  color: #fff;
}
</style>
