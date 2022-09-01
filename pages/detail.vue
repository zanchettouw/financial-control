<template>
  <div>
    <h1>Details page</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DetailsPage',
  middleware: 'auth'
})
</script>
