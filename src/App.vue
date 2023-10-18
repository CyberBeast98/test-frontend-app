<template>
  <div class="w-100">
    <TopMenu />
    <div class="d-flex test">
      <NavigationMenu />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationMenu from '@/components/Navigation';
import TopMenu        from '@/components/TopMenu';

export default {
  name: 'App',
  components: {TopMenu, NavigationMenu },
  mounted() {
    this.$store.dispatch('getOrders');
    this.$store.dispatch('getProducts');
    this.$store.dispatch('getSortedProducts');
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #36454d;
  background-color: #f0f3f5;
  height: 100%;
}
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0 !important;
}

ul {
  padding: 0 !important;
}

li {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none !important;
}

button:focus, select:focus {
  box-shadow: none !important;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.test {
  height: 90vh;
}
</style>
