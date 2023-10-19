<template>
  <div class="order__container w-100 d-flex flex-column">
    <CounterComponent :text="'Orders'" :count="orders.length"/>
    <div class="d-flex">
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
            <button class="order__button" @click="order.getProducts(); showButton(order.id)">
              <i class="bi bi-card-list"></i>
            </button>
            <p class="d-flex flex-column">
              <span class="fs-3">{{products.length}}</span>
              <span>Products</span>
            </p>
            <DateComponent :date="order.date"/>
          </div>
          <button v-if="!isOpen" class="order__button">
            <i class="bi bi-trash"></i>
          </button>
          <div v-if="orderId === order.id" class="arrow-img d-flex align-items-center justify-content-center">
            <img src="./../assets/icons/arrow-right.svg" alt="arrow-img">
          </div>
        </li>
      </ul>
      <div v-if="isOpen" class="products position-relative bg-white">
        <h3>'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</h3>
        <button
            type="button"
            class="products__close-button bg-white btn-close"
            @click="closeOrders">
        </button>
        <ProductComponent :sorting="products" :isOrderPage="true"/>
        <DeletePopup v-if="isShowPopup"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState }     from 'vuex';
import DateComponent    from '@/components/top-menu/TopMenuDate';
import ProductComponent from '@/components/products/Product';
import CounterComponent from '@/components/Counter';
import DeletePopup      from '@/components/DeletePopup';

export default {
  name: 'OrdersComponent',
  components: {
    CounterComponent,
    ProductComponent,
    DateComponent,
    DeletePopup
  },
  data() {
    return {
      isOpen: false,
      show: false
    }
  },
  computed: {
    ...mapState({
      orders(state) {
        return state.orders;
      },
      products(state) {
        return state.products
      },
      isShowPopup(state) {
        return state.isShowPopup;
      },
      orderId(state) {
        return state.orderId;
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
      this.show = false;
    }
  }
}
</script>

<style scoped>
.order__container {
  padding: 100px 150px 0;
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

.arrow-img {
  width: 50px;
  height: 100%;
  background-color: #CFD8DC;
}

.arrow-img img {
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
