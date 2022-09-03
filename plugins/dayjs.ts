import Vue from 'vue'
import dayjs from 'dayjs'

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs(): string
  }
}

Vue.prototype.$dayjs = () => console.log(dayjs())
