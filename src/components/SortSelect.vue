<template>
  <div class="flex">
    <label for="type-select">Type:</label>
    <select @change="onChange($event)" id="type-select">
      <option value="" selected>All products</option>
      <option v-for="product in products" :key="product.id" :value="product.type">
        {{product.type}}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'SortSelect',
  props: { products: { type: Array } },
  methods: {
    onChange(event) {
      this.$store.commit('setSelectedOption', event.target.value)
    }
  }


}
</script>
<style scoped>
select {
  margin-left: 20px;
  padding: 5px 10px;
  outline: none;
}
</style>

