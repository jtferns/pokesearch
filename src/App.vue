<template>
  <div id="app">
    <PokemonView />
  </div>
</template>

<script>
import PokemonView from './components/PokemonView.vue';
import pkmn from './data/pokemon.json';

export default {
  name: 'App',
  components: {
    PokemonView,
  },
  data() {
    return {
      pkmn,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
