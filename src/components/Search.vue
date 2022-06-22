<template>
  <input :value="searchTerm" @input="onSearch" placeholder="Enter a Pokémon name..." />
</template>

<script>
export default {
  name: 'Search',
  props: {
    searchTerm: String,
    onSearch: Function,
  },
};
</script>

<style scoped>
input {
  width: 35%;
}
</style>