import Vue from 'vue'
import Vuex from 'vuex'

import table from '@/mock/companyTable'
import activity from '@/mock/activity'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: Object,
    url: 'Company Data',
    searchQuery: '',
    companyTable: table,
    activities: activity
  },
  mutations: {
    setDataCompany (state, payload) {
      state.company = payload
    },
    setNavigation (state, payload) {
      state.url = payload
    },
    setFilter (state, payload) {
      state.searchQuery = payload
    }
  },
  actions: {
    newDataCompany ({ commit }, payload) {
      const dataCompany = {
        name: payload.name,
        spend: payload.spend,
        spendAbility: payload.spendAbility,
        notes: payload.notes,
        adNotes: payload.adNotes
      }
      commit('setDataCompany', dataCompany)
    },
    eraseDataCompany ({ commit }, payload) {
      const dataCompany = Object
      commit('setDataCompany', dataCompany)
    },
    updateUrl ({ commit }, payload) {
      const newUrl = payload
      commit('setNavigation', newUrl)
    },
    updateFilter ({ commit }, payload) {
      const query = payload
      commit('setFilter', query)
    }
  },
  getters: {
    companyTable (state) {
      return state.companyTable
    },
    activities (state) {
      return state.activities
    },
    urlActive (state) {
      return state.url
    },
    searchQuery (state) {
      return state.searchQuery
    }
  }
})
