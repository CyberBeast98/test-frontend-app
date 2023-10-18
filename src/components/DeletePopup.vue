<template>
  <div class="delete-popup bg-white">
    <header class="delete-popup__header">
      <h4>Are you sure you want to remove this product?</h4>
      <button
          type="button"
          class="delete-popup__close-button bg-white btn-close"
          @click="closePopup">
      </button>
    </header>
    <div class="delete-popup__content">
      <img :src="product.photo" class="delete-popup__image" alt="product-image">
    </div>
    <footer class="delete-popup__footer d-flex">
      <button class="delete-popup__button text-light" @click="closePopup">Cancel</button>
      <button class="delete-popup__button delete-popup__button--delete text-danger bg-white" @click="deleteProduct(id)">
        Delete
      </button>
    </footer>
  </div>
  <div class="blur-background bg-dark"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DeletePopup',
  computed: {
    ...mapState({
      products(state) {
        return state.products;
      },
      id(state) {
        return state.id;
      },
      product(state) {
        return state.product;
      }
    })
  },
  methods: {
    deleteProduct(id) {
      this.$store.commit('setProducts',  this.products.filter(product => product.id !== id));
      this.$store.commit('setShowPopup', false);
    },
    closePopup() {
      this.$store.commit('setShowPopup', false);
    }
  }
}
</script>

<style scoped>
.delete-popup {
  position: absolute;
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

.delete-popup__footer {
  justify-content: flex-end;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 70%;
  z-index: 1;
}
</style>
