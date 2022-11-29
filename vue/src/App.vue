<script setup lang="ts">
  import { onMounted } from 'vue';
  import { usePokeStore } from '@/store/pokemon';
  
  const pokeStore = usePokeStore();
  const { getPokemonData } = pokeStore;

  onMounted(async () => {
    await getPokemonData();
  })
</script>

<template>
</template>
