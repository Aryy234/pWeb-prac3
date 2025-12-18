<template>
  <!-- Vista contenedora que maneja el estado del juego -->
  <div>
    <h1>Juego Yes/No</h1>
    
    <!-- Contenedor de los 3 cuadros de imagen -->
    <div class="contenedor-cuadros">
      <CuadroImagen 
        v-for="(cuadro, index) in cuadros" 
        :key="index"
        :imagen="cuadro.imagen"
        :respuesta="cuadro.respuesta"
      />
    </div>

    <!-- Botón JUGAR -->
    <button @click="jugar" :disabled="intentos >= 5">JUGAR</button>

    <!-- Información del juego -->
    <div class="info">
      <p>Intentos: {{ intentos }}/5</p>
      <p>Puntos: {{ puntos }}</p>
      <p v-if="puntos >= 10">HAS GANADO</p>
      <p v-if="intentos >= 5 && puntos < 10">HAS PERDIDO</p>
    </div>

    <!-- Botón Volver a intentar -->
    <button v-if="intentos >= 5" @click="reiniciar">Volver a intentar</button>
  </div>
</template>

<script>
// Importamos el componente presentacional y el servicio
import CuadroImagen from '../components/CuadroImagen.vue'
import { obtenerRespuesta } from '../clients/yesnoClient'

export default {
  name: 'JuegoView',
  components: {
    CuadroImagen
  },
  data() {
    return {
      // Estado de los 3 cuadros (cada uno con su imagen y respuesta)
      cuadros: [
        { imagen: '', respuesta: '' },
        { imagen: '', respuesta: '' },
        { imagen: '', respuesta: '' }
      ],
      intentos: 0,
      puntos: 0
    }
  },
  methods: {
    // Método principal que se ejecuta al presionar JUGAR
    async jugar() {
      // Incrementa el contador de intentos
      this.intentos++;

      // Consume la API 3 veces (una por cada cuadro)
      for (let i = 0; i < 3; i++) {
        const datos = await obtenerRespuesta();
        this.cuadros[i].imagen = datos.image;
        this.cuadros[i].respuesta = datos.answer;
      }

      // Calcula los puntos según las coincidencias de "yes"
      this.calcularPuntos();
    },
    // Calcula puntos basándose en cuántos "yes" hay
    calcularPuntos() {
      const coincidencias = this.cuadros.filter(c => c.respuesta === 'yes').length;
      
      if (coincidencias === 3) {
        this.puntos += 5;
      } else if (coincidencias === 2) {
        this.puntos += 2;
      } else if (coincidencias === 1) {
        this.puntos += 1;
      }
    },
    // Reinicia el juego a su estado inicial
    reiniciar() {
      this.cuadros.forEach(cuadro => {
        cuadro.imagen = '';
        cuadro.respuesta = '';
      });
      this.intentos = 0;
      this.puntos = 0;
    }
  }
}
</script>

<style scoped>
.contenedor-cuadros { display: flex; justify-content: center; }
button { padding: 10px 20px; margin: 20px; font-size: 16px; }
</style>
