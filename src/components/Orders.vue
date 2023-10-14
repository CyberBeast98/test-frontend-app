<template>
  <div class="order__container">
    <input type="text" v-model="text">
    <ul class="order">
      <li v-for="order in sortOrders" :key="order.id" class="order__item">
        <span class="order__title">{{order.title}}</span>
        <span class="order__description">{{order.description}}</span>
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

<style scoped>
.order__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.order {
  width: 80%;
}

.order__item {
  display: flex;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #FFFFFF;
}

.order__title {
  width: 20%;
}
</style>
