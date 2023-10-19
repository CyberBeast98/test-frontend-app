<template>
  <div class="w-100">
    <TopMenu />
    <div class="pages d-flex h-100">
      <NavigationMenu />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationMenu from '@/components/Navigation';
import TopMenu        from '@/components/top-menu/TopMenu';
import { mapState }   from "vuex";

export default {
  name: 'App',
  components: {TopMenu, NavigationMenu },
  mounted() {
    this.$store.dispatch('getOrders');
    if (localStorage.products) {
      this.products.push(...JSON.parse(localStorage.products));
    } else {
      this.$store.dispatch('getProducts');
    }
    this.$store.dispatch('getSortedProducts');
  },
  computed: {
    ...mapState({
      products(state) {
        return state.products
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #36454d;
  height: 100%;
}
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0 !important;
}

ul {
  padding: 0 !important;
  margin: 0 !important;
}

li {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none !important;
}

p {
  margin-bottom: unset !important;
}

button:focus, select:focus {
  box-shadow: none !important;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.pages {
  background-color: #f0f3f5;
}
</style>
