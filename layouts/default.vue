<template>
  <div>
    <DefaultHeader />
    <div class="max-w-7xl mx-auto p-4">
      <div class="mt-4">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

import DefaultHeader from '@/components/ui/DefaultHeader.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    DefaultHeader
  },
  data () {
    return {}
  },

  methods: {}
})
</script>
