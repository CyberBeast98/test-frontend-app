import { createStore }      from 'vuex'
import { orders, products } from "@/front-end-data.json";

const store = createStore({
  state: {
    orders: [],
    products: [],
    id: null,
    product: null,
    isShowPopup: false,
    selectedOption: '',
    sortedProducts: []
  },
  actions: {
    getOrders(context) {
      context.commit('setOrders', orders);
    },
    getProducts(context) {
      context.commit('setProducts', products);
    },
    getSortedProducts(context) {
      context.commit('setSortedProducts', products)
    }
  },
  mutations: {
    setOrders(state, data) {
      state.orders = data
    },
    setProducts(state, data) {
      state.products = data
    },
    setId(state, data) {
      state.id = data
    },
    setProduct(state, data) {
      state.product = data
    },
    setShowPopup(state, data) {
      state.isShowPopup = data
    },
    setSortedProducts(state, data) {
      state.sortedProducts = data
    },
    setSelectedOption(state, data) {
      state.selectedOption = data
    }
  }
});

export default store;
