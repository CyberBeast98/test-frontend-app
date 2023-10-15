<template>
  <span v-if="isHeader">{{weekday}}</span>
  <div>
    <span>{{formattedDate}}</span>
    <span v-if="isHeader">{{formattedTime}}</span>
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
