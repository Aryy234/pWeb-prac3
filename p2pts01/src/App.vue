<template>
  <!-- Componente raíz que solo renderiza la vista -->
  <div id="app">
    <JuegoView />
  </div>
</template>

<script>
// App.vue solo importa desde views/
import JuegoView from './views/JuegoView.vue'

export default {
  name: 'App',
  components: {
    JuegoView
  }
}
</script>

<style>
#app { text-align: center; margin-top: 20px; }
</style>
