<template>
  <header>
    <DateComponent :date="new Date()" :isHeader="true"/>
  </header>
</template>

<script>

import DateComponent from "@/components/Date";
export default {
  name: 'HeaderComponent',
  components: {DateComponent},
}
</script>
<style scoped>
header {
  position: sticky;
  padding: 20px 0;
  background-color: #FFFFFF;
}
</style>
