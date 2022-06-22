<template>
  <div>
    <h2>PokéSearch</h2>
    <div>
      <NameSearch :searchTerm="searchTerm" :onSearch="onSearch" />
      <ResultsList :foundPkmn="foundPkmn" :total="pkmn.count" />
    </div>
  </div>
</template>

<script>
import NameSearch from './NameSearch.vue';
import ResultsList from './ResultsList.vue';
import pkmn from '../data/pokemon.json';

const compareValue = (str) => str.toLowerCase();

export default {
  name: 'PokemonView',
  components: {
    NameSearch,
    ResultsList,
  },
  data() {
    return {
      pkmn,
      searchTerm: '',
    };
  },
  methods: {
    onSearch(event) {
      this.searchTerm = event.target.value;
    },
  },
  computed: {
    foundPkmn() {
      const searchValue = compareValue(this.searchTerm);
      if (!searchValue) {
        return [];
      }
      return this.pkmn.results.filter((p) =>
        compareValue(p.name).includes(searchValue)
      );
    },
  },
};
</script>
