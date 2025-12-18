<template>
  <div v-if="mostrar" class="mensaje-juego" :style="{ color: color }">
    <!-- Mensaje principal -->
    <p>{{ mensaje1 }}</p>
    <!-- Mensaje secundario -->
    <p>{{ mensaje2 }}</p>
  </div>
</template>

<script>
/**
 * Componente 1.2 - MensajeJuego
 * Componente presentacional para mostrar mensajes de victoria o derrota
 * Responsabilidad: Renderizar mensajes basados en props
 */
export default {
  name: 'MensajeJuego',
  props: {
    // Controla si el mensaje se muestra o no
    mostrar: {
      type: Boolean,
      default: false
    },
    // Color del texto del mensaje
    color: {
      type: String,
      default: 'black'
    },
    // Primer mensaje a mostrar
    mensaje1: {
      type: String,
      default: ''
    },
    // Segundo mensaje a mostrar
    mensaje2: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.mensaje-juego {
  margin: 20px 0;
  font-weight: bold;
}
</style>
