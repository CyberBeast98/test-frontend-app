<template>
  <div class="order__container w-100 d-flex flex-column" :class="{'order__container--big': isOpen}">
    <CounterComponent
        v-if="orders.length > 0"
        :text="'Orders'"
        :count="orders.length"
        class="counter"/>
    <div v-if="orders.length > 0" class="d-flex">
      <ul class="order" :class="{'order--short': isOpen }">
        <li
            v-for="order in orders"
            :key="order.id"
            class="order__item d-flex align-items-center justify-content-between bg-white">
          <div v-if="!isOpen" class="order__block d-flex align-items-center justify-content-between">
            <span>{{order.title}}</span>
            <span>{{order.description}}</span>
          </div>
          <div class="order__block d-flex align-items-center justify-content-between">
            <button
                v-if="products.length > 0"
                class="order__button"
                @click="order.getProducts(); showButton(order.id)">
              <i class="bi bi-card-list"></i>
            </button>
            <p class="d-flex flex-column">
              <span class="fs-3">{{products.length}}</span>
              <span>Products</span>
            </p>
            <DateComponent :date="order.date"/>
          </div>
          <button v-if="!isOpen" class="order__button" @click="showPopup(order.id, order)">
            <i class="bi bi-trash"></i>
          </button>
          <div v-if="orderId === order.id && isOpen" class="arrow d-flex align-items-center justify-content-center">
            <img src="./../assets/icons/arrow-right.svg" alt="arrow-img">
          </div>
        </li>
      </ul>
      <div v-if="isOpen" class="products position-relative w-100 bg-white">
        <h3>'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</h3>
        <button
            type="button"
            class="products__close-button bg-white btn-close"
            @click="closeOrders">
        </button>
        <ProductComponent :sorting="products" :isOrderPage="true"/>
      </div>
      <DeletePopup
          v-if="isShowOrderPopup"
          :isOrderDelete="true"
          :orders="orders"
          :orderId="orderId"/>
      <DeletePopup v-if="isShowProductPopup"/>
    </div>
    <EmptyComponent v-else :page="'Orders'"/>
  </div>
</template>

<script>
import { mapState }     from 'vuex';
import DateComponent    from '@/components/Date';
import ProductComponent from '@/components/products/Product';
import CounterComponent from '@/components/Counter';
import DeletePopup      from '@/components/DeletePopup';
import EmptyComponent   from '@/components/Empty';

export default {
  name: 'OrdersComponent',
  components: {
    EmptyComponent,
    CounterComponent,
    ProductComponent,
    DateComponent,
    DeletePopup
  },
  data() {
    return { isOpen: false }
  },
  computed: {
    ...mapState({
      orders(state) {
        return state.orders;
      },
      orderId(state) {
        return state.orderId;
      },
      products(state) {
        return state.products
      },
      isShowOrderPopup(state) {
        return state.isShowOrderPopup;
      },
      isShowProductPopup(state) {
        return state.isShowProductPopup;
      }
    })
  },
  methods: {
    showButton(id) {
      this.$store.commit('setOrderId', id)
      this.isOpen = true;
    },
    closeOrders() {
      this.$store.commit('setOrderId', null);
      this.isOpen = false;
    },
    showPopup(id, order) {
      this.$store.commit('setShowOrderPopup', true);
      this.$store.commit('setOrderId', id);
      this.$store.commit('setOrder', order);
    }
  }
}
</script>

<style scoped>
.order__container {
  padding: 100px 250px 0;
}

.order__container--big {
  padding: 100px 50px 0;
}

.order {
  width: 100%;
}

.order--short {
  width: 40%;
  margin-right: 30px;
}

.order__item {
  padding: 0 0 0 20px;
  height: 100px;
  border: 1px solid #CFD8DC;
  border-radius: 4px;
  margin-bottom: 10px;
}

.order__item span {
  width: 80%;
}

.order__item p {
  margin: 0 20px;
}

.order__button {
  font-size: 25px;
  margin-right: 20px;
}

.products {
  margin-left: 30px;
  padding: 20px;
  height: fit-content;
  border-radius: 4px;
  border: 1px solid #CFD8DC;
}

.products h3 {
  margin-bottom: 30px !important;
}

.counter {
  margin-bottom: 50px;
}

.arrow {
  width: 50px;
  height: 100%;
  background-color: #CFD8DC;
}

.arrow img {
  width: 50%;
  height: 50%;
}

.products__close-button {
  position: absolute;
  right: -20px;
  top: -20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 0 45px -12px rgba(0,0,0,0.75);
  opacity: 1;
}

.products__close-button:hover {
  opacity: 1;
}
</style>
