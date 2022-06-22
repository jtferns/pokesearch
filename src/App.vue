<template>
  <div id="app">
    <Pokemon />
  </div>
</template>

<script>
import Pokemon from './components/Pokemon.vue';
import pkmn from './data/pokemon.json';

export default {
  name: 'App',
  components: {
    Pokemon,
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
