<template>
  <header class="top-menu position-sticky d-flex align-items-center justify-content-end">
    <DateComponent :date="new Date()" :isHeader="true"/>
  </header>
</template>

<script>
import DateComponent from '@/components/Date';

export default {
  name: 'TopMenu',
  components: { DateComponent },
}
</script>

<style scoped>
.top-menu {
  height: 10vh;
  padding: 0 20px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.75);
}
</style>
