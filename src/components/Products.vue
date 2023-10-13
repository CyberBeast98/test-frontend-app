<template>
  <ul class="products">
    <li v-for="product in products" :key="product.id" class="orders__item">
      <span>{{product.title}}</span>
    </li>
  </ul>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'ProductsComponent',
  computed: {
    ...mapState({
      products(state) {
        return state.products
      }
    })
  }
}
</script>
