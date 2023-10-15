<template>
  <div class="delete-popup">
    <header class="delete-popup__header">
      <h2>Are you sure you want to remove this product?</h2>
      <button @click="closePopup">
        <img src="../assets/icons/close.svg" class="delete-popup__close-button" alt="close">
      </button>
    </header>
    <div class="delete-popup__content">
      <img :src="product.photo" class="delete-popup__image" alt="product-image">
    </div>
    <footer class="delete-popup__footer">
      <button class="delete-popup__button delete-popup__button--cancel" @click="closePopup">Cancel</button>
      <button class="delete-popup__button delete-popup__button--delete" @click="deleteProduct(id)">Delete</button>
    </footer>
  </div>
  <div class="blur-background"></div>
</template>

<script>
import { mapState } from "vuex";

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
  background-color: #FFFFFF;
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
  display: flex;
  justify-content: flex-end;
  background-color: #6A9739;
  padding: 20px;
  border-radius: 0 0 4px 4px;
}

.delete-popup__close-button {
  position: absolute;
  right: -20px;
  top: -20px;
  width: 25px;
  height: 25px;
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0 0 45px -12px rgba(0,0,0,0.75);
}

.delete-popup__button {
  font-size: 14px;
  text-transform: uppercase;
}

.delete-popup__button--cancel {
  color: #FFFFFF;
}

.delete-popup__button--delete {
  color: red;
  background-color: #FFFFFF;
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
  background-color: #000000;
  opacity: 60%;
  z-index: 1;
}
</style>
