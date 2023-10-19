<template>
  <nav class="navigation d-flex align-items-center flex-column bg-white">
    <router-link to="/" class="navigation__link fw-bold">Orders</router-link>
    <router-link to="/products" class="navigation__link fw-bold">Products</router-link>
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
  box-shadow: 10px 0 32px -7px rgba(0,0,0,0.75);
  padding: 30px 0;
}

.navigation__link {
  padding: 0 5px;
  color: #36454d;
  margin-bottom: 15px;
  border-bottom: 3px solid transparent;
  text-transform: uppercase;
  transition: 0.3s;
}

.navigation__link:hover,
.navigation__link:focus  {
  border-bottom: 3px solid #8bc34a;
}
</style>
