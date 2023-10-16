<template>
  <div class="order__container">
    <ul class="order">
      <li v-for="order in orders" :key="order.id" class="order__item">
        <span>{{order.title}}</span>
        <span>{{order.description}}</span>
        <DateComponent :date="order.date"/>
        <button>Open</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DateComponent from "@/components/Date";

export default {
  name: 'OrdersComponent',
  components: { DateComponent },
  computed: {
    ...mapState({
      orders(state) {
        return state.orders;
      }
    })
  }
}
</script>

<style scoped>
.order__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 100px 0;
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

.order__item span {
  width: 20%;
}
</style>
