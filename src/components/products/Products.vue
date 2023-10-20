<template>
  <div class="container d-flex flex-column">
    <div v-if="products.length > 0" class="counter__block d-flex align-items-center justify-content-start">
      <CounterComponent :text="'Products'" :count="products.length"/>
      <SortSelect :products="products" />
    </div>
    <EmptyComponent v-else :page="'Products'" />
    <ProductComponent :products="products" :selectedOption="selectedOption" :sorting="sorting"/>
    <DeletePopup v-if="isShowProductPopup"/>
  </div>
</template>

<script>
import { mapState }     from 'vuex';
import DeletePopup      from '@/components/DeletePopup';
import SortSelect       from '@/components/products/SortSelect';
import ProductComponent from '@/components/products/Product';
import CounterComponent from '@/components/Counter';
import EmptyComponent   from '@/components/Empty';

export default {
  name: 'ProductsComponent',
  components: {
    EmptyComponent,
    CounterComponent,
    ProductComponent,
    SortSelect,
    DeletePopup
  },
  computed: {
    ...mapState({
      products(state) {
        return state.products
      },
      isShowProductPopup(state) {
        return state.isShowProductPopup;
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
  }
}
</script>

<style scoped>
.container {
  padding: 100px 100px 0;
}

.counter__block {
  margin-bottom: 50px;
}

.product__block p {
  margin-bottom: 0 !important;
}

@media (max-width: 1200px) {
  .container {
    padding: 100px 20px 0;
  }
}
</style>
