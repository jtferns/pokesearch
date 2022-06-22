<template>
  <h2>PokéSearch</h2>
  <div>
    <Search :searchTerm="searchTerm" :onSearch="onSearch" />
    <Results :foundPkmn="foundPkmn" :total="pkmn.count" />
  </div>
</template>

<script>
import Search from './Search.vue';
import Results from './Results.vue';
import pkmn from '../data/pokemon.json';

const compareValue = (str) => str.toLowerCase();

export default {
  name: 'Pokemon',
  components: {
    Search,
    Results,
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
