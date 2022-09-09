import { actionTree } from 'typed-vuex'
import { Category } from '@/models/Category'

export const state = () => ({
  categories: [] as Category[]
})

export const actions = actionTree({ state }, {
  async getCategories (): Promise<Category[]> {
    return await this.$axios.$get('categories')
  }
})
