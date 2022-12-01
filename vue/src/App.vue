<script setup lang="ts">
  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { usePokeStore } from '@/store/pokemon';
  
  const pokeStore = usePokeStore();
  const { getPokemonData } = pokeStore;
  const { pokemonData } = storeToRefs(pokeStore);

  onMounted(async () => {
    await getPokemonData();
  })
</script>

<template>
  <div v-for="pokemon in pokemonData" :key="pokemon.id">
    <img 
      :src="pokemon.sprite" 
      :alt="pokemon.name"
    >
    <p>{{pokemon.id}} - {{pokemon.name}}</p>
  </div>
</template>
