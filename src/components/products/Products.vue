<template>
  <div class="container">
    <div class="counter__block">
      <h2 class="counter">Products / {{ sorting.length }}</h2>
      <SortSelect :products="products" />
    </div>
    <ul class="product">
      <li v-for="product in sorting" :key="product.id" class="product__item">
        <div class="product__block product__block--row">
          <img class="product__image" :src="product.photo" alt="photo">
          <div class="product__block">
            <span class="product__text">{{product.title}}</span>
            <span class="product__text product__text--number">{{product.serialNumber}}</span>
          </div>
        </div>
        <div class="product__block">
          <span class="product__text">{{product.type}}</span>
        </div>
        <div class="product__block">
          <span class="product__text">Start: {{product.guarantee.start}}</span>
          <span class="product__text">End: {{product.guarantee.end}}</span>
        </div>
        <div class="product__block">
          <span class="product__text">{{ product.isNew === 1 ? 'new' : 'used'}}</span>
        </div>
        <div class="product__block">
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
      <DeletePopup v-if="isShowPopup"/>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DeletePopup  from "@/components/DeletePopup";
import SortSelect   from "@/components/SortSelect";

export default {
  name: 'ProductsComponent',
  components: { SortSelect, DeletePopup },
  computed: {
    ...mapState({
      products(state) {
        return state.products
      },
      isShowPopup(state) {
        return state.isShowPopup;
      },
      selectedOption(state) {
        return state.selectedOption;
      },
      sortedProducts(state) {
        return state.sortedProducts;
      }
    }),
    sorting() {
      if (this.selectedOption !== '') return this.sortedProducts.filter(product => product.type.includes(this.selectedOption))

      return this.products
    }
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 100px 0;
}

.product__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 4px;
}

.counter__block {
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 50px;
}

.counter {
  margin-right: 30px;
}

.product {
  width: 100%;
}

.product__block {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
}

.product__block--row {
  flex-direction: row;
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
