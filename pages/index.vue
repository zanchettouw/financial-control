<template>
  <div>
    <pre>
      user
      {{ user }}
    </pre>

    <pre>
      config
      {{ $config }}
    </pre>
    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  asyncData ({ $config }) {
    console.log($config)
  },
  computed: {
    user () {
      return this.$store.state
    }
  },
  mounted () {
    this.$myInjectedFunction('funcionando em mounted')
    this.$dayjs()
  }
})
</script>
