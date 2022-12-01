import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';

import { getApiRoute } from '@/config/getApiRoute';
import { useHttpClient } from '@/config/useHttpClient';
import { getErrorMessage, createTypes } from '@/utils';

import { pokemon } from './api'

function sorter(items) {
  items.sort(function(a, b) { 
    return (a.id - b.id) || a.name.localeCompare(b.name); 
  });
}

export const usePokeStore = defineStore('pokemon', () => {

  const httpClient = useHttpClient();

  const isFetchingPokemons: Ref<boolean> = ref(false);
  const fetchingPokemonError: Ref<string> = ref('');
  const pokemonData: any = ref([]);
  const pokemonDataOriginal: any = [];
  
  async function getPokemonData() {
    isFetchingPokemons.value = true;
    const url = getApiRoute(pokemon, { 
      params: {},
      query: { offset: 0, limit: 24 }
    });
    const res = await httpClient.get(url)

    // @ts-ignore
    const { data, error } = res;
    if (error) {
      fetchingPokemonError.value = getErrorMessage(error);
    } else {
      data.results.forEach( async function(pokemon: any) {
        fetchPokemonData(pokemon.url); 
      })
    }
  }

  async function fetchPokemonData(url: string){
    let pokemonInfo = {}
    const res = await httpClient.get(url)

    // @ts-ignore
    const { data, error } = res;
    if (error) {
      fetchingPokemonError.value = getErrorMessage(error);
    } else {
      pokemonInfo = {
        name: data.name,
        id: data.id,
        types: createTypes(data.types),
        sprite: data.sprites.front_default,
      }
    }
    pokemonDataOriginal.push(pokemonInfo);
    pokemonData.value.push(pokemonInfo);
  }

  return {
    getPokemonData,
    isFetchingPokemons,
    fetchingPokemonError,
    pokemonData,
  };
});
