<template>
  <div class="tarjeta-pokemon">
    <!-- Imagen del Pokemon o cuadro negro inicial -->
    <img :src="imagen" :alt="nombre" class="imagen-pokemon" />
    <!-- Nombre del Pokemon o texto oculto -->
    <p class="nombre-pokemon">{{ nombre }}</p>
  </div>
</template>

<script>
/**
 * Componente 1.1 - TarjetaPokemon
 * Componente presentacional que muestra una imagen y nombre de Pokemon
 * Responsabilidad: Renderizar UI basada en props
 */
export default {
  name: 'TarjetaPokemon',
  props: {
    // URL de la imagen del Pokemon
    imagen: {
      type: String,
      required: true
    },
    // Nombre del Pokemon o texto oculto
    nombre: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tarjeta-pokemon {
  text-align: center;
}

.imagen-pokemon {
  width: 200px;
  height: 200px;
}
</style>
