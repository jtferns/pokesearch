<template>
  <ul>
    <li v-for="pkmn in foundPkmn">
      <a :href="pkmn.url" target="_blank">{{ pkmn.name }}</a>
    </li>
  </ul>
  <small
    ><i>{{ foundPkmn.length }} out of {{ total }} Pokémon match</i></small
  >
</template>

<script>
export default {
  name: 'Results',
  props: {
    foundPkmn: Array,
    total: Number,
  },
};
</script>
