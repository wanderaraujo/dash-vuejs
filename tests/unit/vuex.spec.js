import store from '@/store.js'

describe('dispatch vuex', () => {
  it('write some data in store company', () => {
    let companyForm = {
      name: 'Apple',
      spend: '400,000',
      spendAbility: '200,000 300,000',
      notes: 'Company sell ipad, and iphone',
      adNotes: 'Nothing here!'
    }
    store.dispatch('newDataCompany', companyForm)
    expect(store.getters.company).toEqual(companyForm)
  })
})

describe('dispatch vuex', () => {
  it('Erase data in store company', () => {
    store.dispatch('eraseDataCompany')
    expect(store.getters.company).toBe(Object)
  })
})
