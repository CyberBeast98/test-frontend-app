import { createStore }      from 'vuex'
import { orders, products } from '@/front-end-data.json';

const store = createStore({
  state: {
    orders: [],
    products: [],
    order: null,
    product: null,
    orderId: null,
    productId: null,
    isShowProductPopup: false,
    isShowOrderPopup: false,
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
    setProductId(state, data) {
      state.productId = data
    },
    setOrderId(state, data) {
      state.orderId = data
    },
    setProduct(state, data) {
      state.product = data
    },
    setOrder(state, data) {
      state.order = data
    },
    setShowProductPopup(state, data) {
      state.isShowProductPopup = data
    },
    setShowOrderPopup(state, data) {
      state.isShowOrderPopup = data
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
