<template>
  <nav class="navigation flex-center flex-column">
    <router-link to="/" class="navigation__link">Orders</router-link>
    <router-link to="/products" class="navigation__link">Products</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu'
}
</script>

<style scoped>
.navigation {
  min-width: 200px;
  background-color: #FFFFFF;
  box-shadow: 10px 0 32px -7px rgba(0,0,0,0.75);
  padding: 30px 0;
}

.navigation__link {
  color: #36454d;
  font-weight: 600;
  margin-bottom: 15px;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  transition: 0.3s;
}

.navigation__link:hover {
  border-bottom: 2px solid green;
}
</style>
