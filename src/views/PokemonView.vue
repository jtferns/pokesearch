<script setup lang="ts"></script>

<script lang="ts">
import pkmn from '../data/pokemon.json'
import NameSearch from '../components/NameSearch.vue'
import ResultsList from '../components/ResultsList.vue'
import type { PKMN } from '@/types/pokemon'
import type { Shared } from '@/types/shared'

const compareValue = (str: string) => str.toLowerCase()
export default {
  name: 'PokemonView',
  components: {
    NameSearch,
    ResultsList,
  },
  data() {
    return {
      pkmn: pkmn as PKMN.SearchResults,
      searchTerm: '',
    }
  },
  methods: {
    onSearch(event: Event) {
      this.searchTerm = (event as Shared.VInputEvent)?.target?.value
    },
  },
  computed: {
    foundPkmn(): PKMN.SearchResult[] {
      const searchValue = compareValue(this.searchTerm)
      if (!searchValue) {
        return []
      }
      return this.pkmn.results.filter((p) =>
        compareValue(p.name).includes(searchValue)
      )
    },
  },
}
</script>

<template>
  <div>
    <h2>PokéSearch</h2>
    <div>
      <NameSearch :searchTerm="searchTerm" :onSearch="onSearch" />
      <ResultsList :foundPkmn="foundPkmn" :total="pkmn.count" />
    </div>
  </div>
</template>
