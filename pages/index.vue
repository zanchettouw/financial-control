<template>
  <div>
    {{ user }}
    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    user () {
      return this.$store.state
    }
  },
  mounted () {
    this.$myInjectedFunction('funcionando em mounted')
  }
})
</script>
