<template>
  <div class="orders__container">
    <input type="text" v-model="text">
    <ul class="orders">
      <li v-for="order in sortOrders" :key="order.id" class="orders__item">
        <span>{{order.title}}</span>
        <DateComponent :date="order.date"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DateComponent from "@/components/Date";

export default {
  name: 'OrdersComponent',
  components: {DateComponent},
  data() {
    return { text: '' }
  },
  computed: {
    ...mapState({
      orders(state) {
        return state.orders;
      }
    }),
    sortOrders() {
      if (this.text.length > 0) return this.orders.filter(i => i.title.includes(this.text))

      return this.orders
    }
  }
}
</script>

<style>
.orders__container {
  display: flex;
  flex-direction: column;
}

.orders__item {
  display: flex;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
