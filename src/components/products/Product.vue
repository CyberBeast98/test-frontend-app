<template>
  <ul class="w-100">
    <li
        v-for="product in sorting"
        :key="product.id"
        class="product__item d-flex align-items-center justify-content-between">
      <div class="product__block d-flex flex-row">
        <img class="product__image" :src="product.photo" alt="photo">
        <div class="product__block d-flex flex-column">
          <span class="product__text">{{product.title}}</span>
          <span class="product__text product__text--number">{{`SN-${product.serialNumber}`}}</span>
        </div>
      </div>
      <div class="product__block">
        <span class="product__text">{{product.type}}</span>
      </div>
      <div class="product__block product__block--guarantee d-flex flex-column">
        <ProductDate :text="'From'" :date="product.guarantee.start"/>
        <ProductDate :text="'To'" :date="product.guarantee.end"/>
      </div>
      <div class="product__block">
        <span class="product__text">{{ product.isNew === 1 ? 'New' : 'Used'}}</span>
      </div>
      <div class="product__block d-flex flex-column">
        <p class="product__text product__text--small">
          <span>{{product.price[0].value}}</span>
          <span class="product__text--small">{{product.price[0].symbol}}</span>
        </p>
        <p class="product__text">
          <span>{{product.price[1].value}}</span>
          <span class="product__text--small">{{product.price[1].symbol}}</span>
        </p>
      </div>
      <button @click="showPopup(product.id, product)">
        <img src="../../assets/icons/delete.svg" alt="delete-img">
      </button>
    </li>
  </ul>
</template>

<script>
import ProductDate from "@/components/products/ProductDate";

export default {
  name: 'ProductComponent',
  components: { ProductDate },
  props: {
    selectedOption: { type: String },
    sorting: { type: Array }
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
  justify-content: space-between;
  margin: 0 0 10px 0;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 4px;
}

.product__block {
  margin: 0 20px;
}

.product__block p {
  margin-bottom: 0 !important;
}

.product__block--guarantee {
  width: 120px;
}

.product__image {
  width: 100px;
}

.product__text {
  font-size: 18px;
}

.product__text--small {
  font-size: 14px;
}

.product__text--number {
  color: #90a4ae;
  margin-top: 5px;
}
</style>

