<template>
  <span>{{formattedDate}}</span>
</template>

<script>

export default {
  name: 'DateComponent',
  props: {
    date: { type: String }
  },
  computed: {
    formattedDate() {
      const date =  new Date(this.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      return `${date}`;
    }
  }
}
</script>
