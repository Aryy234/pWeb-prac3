import axios from 'axios';

/**
 * Cliente para consumir la API de Pokemon
 * Responsabilidad: Comunicación con API externa y transformación de datos
 */

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world';

// Conjunto fijo de 4 Pokemon para el juego
const POKEMON_IDS = [1, 4, 7, 25]; // Bulbasaur, Charmander, Squirtle, Pikachu

/**
 * Obtiene información de un Pokemon por su ID
 * @param {number} id - ID del Pokemon
 * @returns {Promise} Objeto con id, nombre e imagen del Pokemon
 */
export const obtenerPokemon = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return {
    id: response.data.id,
    nombre: response.data.name,
    imagen: `${IMAGE_BASE_URL}/${id}.svg`
  };
};

/**
 * Obtiene 3 Pokemon aleatorios del conjunto fijo de 4
 * @returns {Promise<Array>} Array de 3 Pokemon aleatorios
 */
export const obtenerPokemonAleatorios = async () => {
  const pokemonSeleccionados = [];
  
  // Seleccionar 3 Pokemon aleatorios del conjunto fijo
  for (let i = 0; i < 3; i++) {
    const indiceAleatorio = Math.floor(Math.random() * POKEMON_IDS.length);
    const idPokemon = POKEMON_IDS[indiceAleatorio];
    const pokemon = await obtenerPokemon(idPokemon);
    pokemonSeleccionados.push(pokemon);
  }
  
  return pokemonSeleccionados;
};
