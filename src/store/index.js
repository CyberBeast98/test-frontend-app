import { createStore }      from 'vuex'
import { orders, products } from "@/front-end-data.json";

const store = createStore({
  state: {
    orders: [],
    products: [],
    ordersCount: null,
    productsCount: null
  },
  actions: {
    getOrders(context) {
      context.commit('setOrders', orders);
    },
    getProducts(context) {
      context.commit('setProducts', products);
    },
    getOrdersCount(context) {
      context.commit('setOrdersCount', orders.length)
    },
    getProductsCount(context) {
      context.commit('setOrdersCount', products.length)
    }
  },
  mutations: {
    setOrders(state, data) {
      state.orders = data
    },
    setProducts(state, data) {
      state.products = data
    },
    setOrdersCount(state, data) {
      state.ordersCount = data
    },
    setProductsCount(state, data) {
      state.productsCount = data
    }
  }
});

export default store;
