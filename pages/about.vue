<template>
  <div>
    <h1>Company Page</h1>
    <div v-if="$fetchState.pending">
      Carregando...
    </div>
    <div v-else>
      <div
        v-for="service in services"
        :key="service.id"
        class="border-b border-gray-400 py-4"
      >
        {{ service.username }}
      </div>
    </div>
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
