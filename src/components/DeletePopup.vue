<template>
  <div class="delete-popup position-absolute bg-white">
    <header class="delete-popup__header">
      <h4>Are you sure you want to remove this product?</h4>
      <button
          type="button"
          class="delete-popup__close-button bg-white btn-close"
          @click="closePopup">
      </button>
    </header>
    <div v-if="!isOrderDelete" class="delete-popup__content d-flex">
      <img :src="product.photo" class="delete-popup__image" alt="product-image">
      <p>{{product.title}}</p>
    </div>
    <div v-else class="delete-popup__content d-flex">
      <p>{{order.title}}</p>
    </div>
    <footer class="delete-popup__footer d-flex justify-content-end">
      <button class="delete-popup__button text-light" @click="closePopup">Cancel</button>
      <button class="delete-popup__button delete-popup__button--delete text-danger bg-white" @click="deleteEvent(setId)">
        Delete
      </button>
    </footer>
  </div>
  <div class="blur-background position-absolute w-100 h-100 bg-dark"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DeletePopup',
  props: {
    isOrderDelete: { type: Boolean },
    orders: { type: Array },
    orderId: { type: Number }
  },
  computed: {
    ...mapState({
      products(state) {
        return state.products;
      },
      productId(state) {
        return state.productId;
      },
      product(state) {
        return state.product;
      },
      order(state) {
        return state.order;
      }
    }),
    setId() {
      return this.isOrderDelete ? this.orderId : this.productId
    }
  },
  methods: {
    deleteProduct(id) {
      this.$store.commit('setProducts',  this.products.filter(product => product.id !== id));
      this.$store.commit('setShowProductPopup', false);
      localStorage.products = JSON.stringify(this.products)
    },
    deleteOrder(id) {
      this.$store.commit('setOrders',  this.orders.filter(order => order.id !== id));
      this.$store.commit('setShowOrderPopup', false);
    },
    deleteEvent(id) {
      this.isOrderDelete ? this.deleteOrder(id) : this.deleteProduct(id)
    },
    closePopup() {
      this.$store.commit('setShowProductPopup', false);
      this.$store.commit('setShowOrderPopup', false);
    }
  }
}
</script>

<style scoped>
.delete-popup {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  border-radius: 4px;
  z-index: 2;
}

.delete-popup__image {
  width: 50px;
}

.delete-popup__header {
  position: relative;
  padding: 20px;
}

.delete-popup__content {
  padding: 30px 20px;
}

.delete-popup__footer {
  background-color: #6A9739;
  padding: 20px;
  border-radius: 0 0 4px 4px;
}

.delete-popup__close-button {
  position: absolute;
  right: -20px;
  top: -20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 0 45px -12px rgba(0,0,0,0.75);
  opacity: 1;
}

.delete-popup__close-button:hover {
  opacity: 1;
}

.delete-popup__button {
  font-size: 14px;
  text-transform: uppercase;
}

.delete-popup__button--delete {
  padding: 10px 20px;
  border-radius: 20px;
  margin-left: 15px;
}

.blur-background {
  top: 0;
  left: 0;
  opacity: 70%;
  z-index: 1;
}
</style>
