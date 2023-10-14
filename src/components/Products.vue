<template>
  <ul class="product">
    <li v-for="product in products" :key="product.id" class="product__item">
      <img class="product__image" :src="product.photo" alt="photo">
      <span>{{product.title}}</span>
      <span>{{product.type}}</span>
      <span>{{product.specification}}</span>
      <div class="product__guarantee">
        <span> Start: {{product.guarantee.start}}</span>
        <span> End: {{product.guarantee.end}}</span>
      </div>
      <div class="product__price">
        <span>{{product.price[0].value}}{{product.price[0].symbol}}</span>
        <span>{{product.price[1].value}}{{product.price[1].symbol}}</span>
      </div>
      <button @click="showPopup(product.id, product)">
        <img src="../assets/icons/delete.svg" alt="delete-img">
      </button>
    </li>
    <DeletePopup v-if="isShowPopup"/>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import DeletePopup  from "@/components/DeletePopup";

export default {
  name: 'ProductsComponent',
  components: {DeletePopup},
  computed: {
    ...mapState({
      products(state) {
        return state.products
      },
      isShowPopup(state) {
        return state.isShowPopup;
      }
    })
  },
  methods: {
    showPopup(id, product) {
      this.$store.commit('setShowPopup', true);
      this.$store.commit('setId', id);
      this.$store.commit('setProduct', product);
    }
  }
}
</script>
<style scoped>
.product__item {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #FFFFFF;
  margin: 10px;
  border-radius: 4px;
}

.product__item span {
  margin: 0 20px;
}

.product__guarantee, .product__price {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
}

.product__image {
  width: 100px;
}
</style>
