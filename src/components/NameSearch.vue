<script setup lang="ts">
defineProps<{
  searchTerm: string
  onSearch: (e: Event) => void
}>()
</script>

<template>
  <input
    :value="searchTerm"
    @input="onSearch"
    placeholder="Enter a Pokémon name..."
  />
</template>

<style scoped>
input {
  width: 35%;
}
</style>
