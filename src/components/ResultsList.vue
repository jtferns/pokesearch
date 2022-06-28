<script setup lang="ts">
import type { PKMN } from '@/types/pokemon'

defineProps<{
  foundPkmn: Array<PKMN.SearchResult>
  total: number
}>()
</script>

<template>
  <div class="results-container">
    <ul>
      <li v-for="pkmn in foundPkmn" :key="pkmn.name">
        <a :href="pkmn.url" target="_blank">{{ pkmn.name }}</a>
      </li>
    </ul>
  </div>
  <small v-if="foundPkmn.length"
    ><i>{{ foundPkmn.length }} out of {{ total }} Pokémon match</i></small
  >
</template>

<style>
.results-container {
  overflow-y: auto;
  margin: 0, 24px;
  height: 80vh;
}
</style>
