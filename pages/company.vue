<template>
  <div>
    <h1>Company Page</h1>
    <pre>
      {{companies}}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CompanyPage',
  async asyncData({ $axios }) {
    const companies = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return {
      companies
    }
  }
})
</script>
