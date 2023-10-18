<template>
  <div class="order__container d-flex">
    <ul class="order" :class="{'order--short': isOpen }">
      <li v-for="order in orders" :key="order.id" class="order__item">
        <span v-if="!isOpen">{{order.title}}</span>
        <span v-if="!isOpen">{{order.description}}</span>
        <button class="order__button" @click="order.getProducts()">
          <i class="bi bi-card-list"></i>
        </button>
        <p>
          <span>{{products.length}}</span>
          <span>Products</span>
        </p>
        <DateComponent :date="order.date"/>
        <button v-if="!isOpen" class="order__button">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>
    <div v-if="isOpen" class="products bg-white">
      <h3>'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</h3>
      <ProductComponent :sorting="products"/>
    </div>
  </div>
</template>

<script>
import { mapState }   from 'vuex';
import DateComponent  from '@/components/Date';
import ProductComponent from "@/components/products/Product";

export default {
  name: 'OrdersComponent',
  components: {ProductComponent, DateComponent },
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    ...mapState({
      orders(state) {
        return state.orders;
      },
      products(state) {
        return state.products
      }
    })
  }
}
</script>

<style scoped>
.order__container {
  width: 100%;
  padding: 100px 100px 0;
}

.order {
  width: 80%;
}

.order--short {
  width: 40%;
  margin-right: 30px;
}

.order__item {
  display: flex;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #FFFFFF;
}

.order__item span {
  width: 20%;
}

.order__button {
  font-size: 25px;
}

.products {
  padding: 20px;
  height: fit-content;
  border-radius: 4px;
}
</style>
