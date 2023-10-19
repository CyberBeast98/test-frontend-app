<template>
  <header class="top-menu position-sticky d-flex align-items-center justify-content-between bg-white">
    <router-link to="/">
      <img src="../../assets/logo.png" alt="logo">
    </router-link>
    <TopMenuDate :isHeader="true"/>
  </header>
</template>

<script>
import TopMenuDate from '@/components/top-menu/TopMenuDate';

export default {
  name: 'TopMenu',
  components: {TopMenuDate },
}
</script>

<style scoped>
.top-menu {
  height: 10vh;
  padding: 0 200px;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.75);
}
</style>
