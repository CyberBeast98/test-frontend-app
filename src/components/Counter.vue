<template>
  <div class="counter">
    <h2 class="fw-bold">{{text}} / {{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  props: {
    text: { type: String },
    count: { type: Number },
  }
}
</script>
<style scoped>
.counter {
  margin-right: 30px;
}
</style>

