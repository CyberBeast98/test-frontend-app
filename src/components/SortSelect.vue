<template>
  <div class="flex-center">
    <label for="type-select">Type:</label>
    <select @change="onChange($event)" id="type-select">
      <option value="" selected>All products</option>
      <option v-for="product in getUniqTypes" :key="product.index" :value="product">
        {{product}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SortSelect',
  props: { products: { type: Array } },
  computed: {
    getUniqTypes() {
      let types = this.products.map(i => i.type);

      return [...new Set(types)];
    }
  },
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
