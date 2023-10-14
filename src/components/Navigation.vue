<template>
  <nav class="navigation">
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
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 10px 0 32px -7px rgba(0,0,0,0.75);
  height: 100vh;
}

.navigation__link {
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  transition: 0.3s;
}

.navigation__link:hover {
  border-bottom: 2px solid green;
}
</style>
