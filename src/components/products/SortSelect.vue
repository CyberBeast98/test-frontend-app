<template>
  <div class="d-flex align-items-center">
    <label for="type-select">Type:</label>
    <select class="form-select" aria-label="Default select example" @change="onChange($event)" id="type-select">
      <option value="" selected>All products</option>
      <option v-for="type in getUniqTypes" :key="type.index" :value="type">
        {{type}}
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
      let types = this.products.map(product => product.type);

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
  width: 250px;
  margin-left: 20px;
  padding: 5px 10px;
  outline: none;
}
</style>
