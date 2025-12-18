<template>
  <div class="juego-pokemon">
    <h1>Juego POKEMON</h1>
    
    <!-- Contador de puntaje e intentos -->
    <div class="contador">
      <p><strong>Puntaje:</strong> {{ puntaje }}</p>
      <p><strong>Intento:</strong> {{ intento }}</p>
    </div>

    <!-- Tres instancias del componente TarjetaPokemon (Componente 1.1) -->
    <div class="contenedor-tarjetas">
      <TarjetaPokemon 
        v-for="(pokemon, index) in pokemonMostrados"
        :key="index"
        :imagen="pokemon.imagen"
        :nombre="pokemon.nombre"
      />
    </div>

    <!-- Componente MensajeJuego (Componente 1.2) -->
    <MensajeJuego 
      :mostrar="mensaje.mostrar"
      :color="mensaje.color"
      :mensaje1="mensaje.mensaje1"
      :mensaje2="mensaje.mensaje2"
    />

    <!-- Boton JUGAR -->
    <button @click="jugar" :disabled="juegoTerminado">JUGAR</button>
  </div>
</template>

<script>
import TarjetaPokemon from '@/components/TarjetaPokemon.vue';
import MensajeJuego from '@/components/MensajeJuego.vue';
import { obtenerPokemonAleatorios } from '@/clients/pokemonClient.js';

/**
 * Componente 1 - JuegoPokemon (Vista Contenedora)
 * Responsabilidad: Manejar estado del juego, llamar servicios y coordinar componentes
 */
export default {
  name: 'JuegoPokemon',
  components: {
    TarjetaPokemon,
    MensajeJuego
  },
  data() {
    return {
      // Estado inicial del juego
      puntaje: 0,
      intento: 0,
      juegoTerminado: false,
      
      // Array con los 3 Pokemon a mostrar
      pokemonMostrados: [
        { imagen: 'https://placehold.co/200x200/000000/000000.png', nombre: 'XXXXXXXXXXX' },
        { imagen: 'https://placehold.co/200x200/000000/000000.png', nombre: 'XXXXXXXXXXX' },
        { imagen: 'https://placehold.co/200x200/000000/000000.png', nombre: 'XXXXXXXXXXX' }
      ],
      
      // Configuracion de mensajes
      mensaje: {
        mostrar: false,
        color: 'black',
        mensaje1: '',
        mensaje2: ''
      }
    };
  },
  methods: {
    /**
     * Metodo principal que se ejecuta al presionar JUGAR
     * Obtiene Pokemon aleatorios, calcula puntos y verifica condiciones de victoria/derrota
     */
    async jugar() {
      // Incrementar el contador de intentos
      this.intento++;
      
      // Llamar al servicio para obtener 3 Pokemon aleatorios
      this.pokemonMostrados = await obtenerPokemonAleatorios();
      
      // Calcular puntos segun coincidencias
      const puntosGanados = this.calcularPuntos();
      this.puntaje += puntosGanados;
      
      // Verificar si el jugador gano (10 o mas puntos)
      if (this.puntaje >= 10) {
        this.mostrarMensajeVictoria();
        this.juegoTerminado = true;
        return;
      }
      
      // Verificar si se acabaron los intentos (5 intentos)
      if (this.intento >= 5) {
        this.mostrarMensajeDerrota();
        this.juegoTerminado = true;
      }
    },
    
    /**
     * Calcula los puntos segun las coincidencias de Pokemon
     * 3 iguales = 5 puntos, 2 iguales = 2 puntos, 0 iguales = 0 puntos
     */
    calcularPuntos() {
      const ids = this.pokemonMostrados.map(p => p.id);
      
      // Contar coincidencias
      const conteo = {};
      ids.forEach(id => {
        conteo[id] = (conteo[id] || 0) + 1;
      });
      
      const valores = Object.values(conteo);
      
      // Si hay 3 iguales
      if (valores.includes(3)) {
        return 5;
      }
      
      // Si hay 2 iguales
      if (valores.includes(2)) {
        return 2;
      }
      
      // No hay coincidencias
      return 0;
    },
    
    /**
     * Muestra mensaje de victoria (Escenario B)
     */
    mostrarMensajeVictoria() {
      this.mensaje = {
        mostrar: true,
        color: 'blue',
        mensaje1: `Puntaje: ${this.puntaje}`,
        mensaje2: 'Felicitaciones has ganado un premio de $10.000,00'
      };
    },
    
    /**
     * Muestra mensaje de derrota (Escenario A)
     */
    mostrarMensajeDerrota() {
      this.mensaje = {
        mostrar: true,
        color: 'red',
        mensaje1: 'Ha utilizado tus 5 intentos',
        mensaje2: 'El juego a terminado, inténtelo otra vez'
      };
    }
  }
};
</script>

<style scoped>
.juego-pokemon {
  text-align: center;
  padding: 20px;
}

.contenedor-tarjetas {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
