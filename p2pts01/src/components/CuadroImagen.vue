<template>
  <!-- Componente presentacional que muestra una imagen y su respuesta oculta -->
  <div class="cuadro">
    <img :src="imagen" :alt="respuesta" />
    <p>{{ respuesta }}</p>
  </div>
</template>

<script>
export default {
  name: 'CuadroImagen',
  // Props que recibe del componente padre
  // imagen: URL de la imagen a mostrar
  // respuesta: texto de la respuesta (yes/no/maybe)
  props: {
    imagen: {
      type: String,
      required: true
    },
    respuesta: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.cuadro { border: 1px solid #ccc; padding: 10px; margin: 10px; }
img { width: 200px; height: 200px; }
</style>
