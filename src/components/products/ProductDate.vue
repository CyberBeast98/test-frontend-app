<template>
  <p class="d-flex align-items-center justify-content-between">
    <span>{{text}}:</span>
    <span>{{formattedDate}}</span>
  </p>
</template>

<script>
export default {
  name: 'ProductDate',
  props: {
    date: { type: String },
    text: { type: String }
  },
  computed: {
    formattedDate() {
      const date =  new Date(this.date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      });

      return `${date}`;
    }
  }
}
</script>

