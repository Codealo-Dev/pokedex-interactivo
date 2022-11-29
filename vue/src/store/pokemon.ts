import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';

import { getApiRoute } from '@/config/getApiRoute';
import { useHttpClient } from '@/config/useHttpClient';
import { getErrorMessage } from '@/utils';

import { pokemon } from './api'

export const usePokeStore = defineStore('pokemon', () => {

  const httpClient = useHttpClient();

  const isFetchingPokemons: Ref<boolean> = ref(false);
  const fetchingPokemonError: Ref<string> = ref('');
  const pokemonData: any = ref({});

  async function getPokemonData() {
    isFetchingPokemons.value = true;
    const url = getApiRoute(pokemon);
    const res = await httpClient.get(url);
    console.log("🚀 ~ file: pokemon.ts ~ line 18 ~ getPokemonData ~ res", res)


    // @ts-ignore
    const { data, error } = res;
    if (error) {
      fetchingPokemonError.value = getErrorMessage(error);
    } else {
      fetchingPokemonError.value = '';
      pokemonData.value = data.results;
    }
    isFetchingPokemons.value = false;
    return res;
  }

  return {
    getPokemonData,
    isFetchingPokemons,
    pokemonData,
  };
});
