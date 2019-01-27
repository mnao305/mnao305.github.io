import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      about: false,
      historys: false,
      links: false,
      products: false
    }),
    mutations: {
      toggleAbout(state) {
        state.about = !state.about
      },
      toggleHistorys(state) {
        state.historys = !state.historys
      },
      toggleLinks(state) {
        state.links = !state.links
      },
      toggleProducts(state) {
        state.products = !state.products
      }
    }
  })
}

export default createStore
