<template>
  <div>
    <h1>Company Page</h1>
    <pre>
      {{ services }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  data () {
    return {
      services: []
    }
  },
  async fetch () {
    this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
  }
})
</script>
