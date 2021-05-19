<template>
  <b-card no-body class="shadow border-0 overflow-hidden card-main">
    <b-row no-gutters>
      <b-col md="12">
        <div class="img-container">
          <b-card-img
            :src="repo.owner.avatar_url"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </div>
      </b-col>
      <b-col md="12">
        <b-card-body class="d-flex justify-content-between align-items-center" :title="repo.name">
          <b-card-text>
            {{ repo.desription }}
          </b-card-text>
          <b-button :href="repo.html_url" variant="outline-primary" class="rounded-0 shadow-sm" target="_blank">
            Open
          </b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  components: {},
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.card-main {
  max-width: 300px;
  margin-bottom: 30px;
}
.img-container {
  margin: auto;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.img-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>