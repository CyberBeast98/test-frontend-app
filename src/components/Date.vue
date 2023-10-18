<template>
  <div class="d-flex flex-column">
    <span v-if="isHeader">{{weekday}}</span>
    <div class="d-flex align-items-center">
      <span>{{formattedDate}}</span>
      <div v-if="isHeader" class="time d-flex align-items-center justify-content-end">
        <img src="./../assets/icons/time.svg" alt="time">
        <span>{{formattedTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateComponent',
  props: {
    date: { type: String },
    isHeader: { type: Boolean },
  },
  computed: {
    formattedDate() {
      const date =  new Date(this.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      return `${date}`;
    },
    weekday() {
      const weekday =  new Date(this.date).toLocaleDateString('en-US', {
        weekday: 'long',
      });

      return `${weekday}`;
    },
    formattedTime() {
      const time =  new Date(this.date).toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute:'2-digit'
      });

      return `${time}`;
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
