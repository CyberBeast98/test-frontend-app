<template>
  <div class="full-width">
    <TopMenu />
    <div class="flex test">
      <NavigationMenu />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationMenu from "@/components/Navigation";
import TopMenu        from "@/components/TopMenu";

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

li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.flex {
  display: flex;
}

.flex-center {
  display: flex;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.full-width {
  width: 100%;
}

.test {
  height: 90vh;
}
</style>
