<template>
  <div class="container w-100 d-flex flex-column align-items-center">
    <div class="counter__block">
      <h2 class="counter">Products / {{ sorting.length }}</h2>
      <SortSelect :products="products" />
    </div>
    <ProductComponent :selectedOption="selectedOption" :sorting="sorting"/>
    <DeletePopup v-if="isShowPopup"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DeletePopup  from '@/components/DeletePopup';
import SortSelect   from '@/components/products/SortSelect';
import ProductComponent from "@/components/products/Product";

export default {
  name: 'ProductsComponent',
  components: { ProductComponent, SortSelect, DeletePopup },
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
  padding: 100px 100px 0;
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

.product__block p {
  margin-bottom: 0 !important;
}
</style>
