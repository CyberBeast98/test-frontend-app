<template>
  <div class="date d-flex flex-column align-items-center">
    <span class="date--small">{{formattedDateSmall}}</span>
    <span>{{formattedDate}}</span>
  </div>
</template>

<script>
export default {
  name: 'DateComponent',
  props: {
    date: { type: String }
  },
  computed: {
    formattedDate() {
      const date =  new Date(this.date).toLocaleDateString('en-US', { day: 'numeric' });
      const month =  new Date(this.date).toLocaleDateString('en-US', { month: 'short' });
      const year =  new Date(this.date).toLocaleDateString('en-US', { year: 'numeric' });

      return `${date} / ${month} / ${year}`
    },
    formattedDateSmall() {
      const date =  new Date(this.date).toLocaleDateString('en-US', { day: 'numeric' });
      const month =  new Date(this.date).toLocaleDateString('en-US', { month: 'numeric' });

      return `${date} / ${month}`
    }
  }
}
</script>
<style scoped>
.date--small {
  font-size: 14px;
}
</style>