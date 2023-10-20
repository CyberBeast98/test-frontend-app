<template>
  <div class="d-flex flex-column">
    <span>{{weekday}}</span>
    <div class="d-flex align-items-center">
      <span>{{formattedDate}}</span>
      <div class="time d-flex align-items-center justify-content-end">
        <img src="../../assets/icons/time.svg" alt="time">
        <span>{{time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenuDate',
  data() {
    return {
      interval: null,
      time: null
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  created() {
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },
  computed: {
    formattedDate() {
      const date =  new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      return `${date}`;
    },
    weekday() {
      const weekday =  new Date().toLocaleDateString('en-US', { weekday: 'long' });

      return `${weekday}`;
    }
  }
}
</script>

<style scoped>
.time {
  margin-left: 20px;
}

.time span {
  margin-top: 1px;
  margin-left: 5px;
}
</style>
