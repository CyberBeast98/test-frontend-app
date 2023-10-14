<template>
  <div class="full-width">
    <HeaderComponent />
    <div class="flex">
      <NavigationMenu />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationMenu from "@/components/Navigation";
import HeaderComponent from "@/components/Header";

export default {
  name: 'App',
  components: {HeaderComponent, NavigationMenu },
  mounted() {
    this.$store.dispatch('getOrders');
    this.$store.dispatch('getProducts');
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
  color: #2c3e50;
  background-color: #BBBFC2;
  height: 100%;
}

li {
  list-style: none;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.flex {
  display: flex;
}

.full-width {
  width: 100%;
}
</style>
