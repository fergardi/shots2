import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

const setUserRef = firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, { ref }) => {
  bindFirebaseRef('user', ref)
})

const vuex = new Vuex.Store({
  strict: true,
  state: {
    collapsed: false
  },
  mutations: {
    collapse (state) {
      state.collapsed = !state.collapsed
    },
    ...firebaseMutations
  },
  actions: {
    user: setUserRef
  }
})

export default vuex
