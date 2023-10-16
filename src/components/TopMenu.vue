<template>
  <header class="top-menu">
    <DateComponent :date="new Date()" :isHeader="true"/>
  </header>
</template>

<script>
import DateComponent from "@/components/Date";

export default {
  name: 'TopMenu',
  components: {DateComponent},
}
</script>

<style scoped>
.top-menu {
  position: sticky;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.75);
}
</style>
