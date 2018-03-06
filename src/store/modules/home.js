import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}

const getter = {
  stateCount: state => state.count
}

const actions = {
  incrementAction ({state, commit, rootState}) {
    commit('increment')
  }
}

const mutations = {
  increment (state) {
    console.log(`mutations:${state.count}`)
    state.count++
  }
}

export default {
  state,
  getter,
  actions,
  mutations
}
