<template>
  <div class="d-flex flex-column align-items-center">
   <h2>{{page}} page is empty</h2>
  </div>
</template>

<script>
export default {
  name: 'EmptyComponent',
  props: { page: { type: String } }
}
</script>
