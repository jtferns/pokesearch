<template>
  <div>
    <ul>
      <li v-for="pkmn in foundPkmn" :key="pkmn.name">
        <a :href="pkmn.url" target="_blank">{{ pkmn.name }}</a>
      </li>
    </ul>
    <small v-if="foundPkmn.length"><i>{{ foundPkmn.length }} out of {{ total }} Pokémon match</i></small>
  </div>
</template>

<script>
export default {
  name: 'ResultsList',
  props: {
    foundPkmn: Array,
    total: Number,
  },
};
</script>
