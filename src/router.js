import Vue from 'vue'
import Router from 'vue-router'
import CompanyData from './views/CompanyData.vue'
import CompanyTable from './views/CompanyTable.vue'
import CompanyPage from './views/CompanyPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'companyData',
      component: CompanyData
    },
    {
      path: '/company-table',
      name: 'companyTable',
      component: CompanyTable
    },
    {
      path: '/company-page',
      name: 'companyPage',
      component: CompanyPage
    }
  ]
})
