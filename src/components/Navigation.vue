<template>
  <nav class="navigation d-flex align-items-center flex-column bg-white">
    <div class="navigation__block">
      <img src="../assets/user-img.jpg" alt="test" class="w-100 h-100">
    </div>
    <router-link to="/" class="navigation__link text-uppercase fw-bold">Orders</router-link>
    <router-link to="/products" class="navigation__link text-uppercase fw-bold">Products</router-link>
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

.navigation__block {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.75);
  margin-bottom: 50px;
}

.navigation__block img {
  border-radius: 50%;
}

.navigation__link {
  margin-bottom: 15px;
  padding: 0 5px;
  color: #36454d;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
}

.navigation__link:hover,
.navigation__link:focus  {
  border-bottom: 3px solid #8bc34a;
}
</style>
