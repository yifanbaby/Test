import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Home from './modules/home'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    home: Home
  },
  state: {
    count: 1
  },
  ...Mutations,
  ...Actions,
  plugins: debug ? [createLogger()] : []
})
