<template>
  <div id="app">
    <CandidatosView />
  </div>
</template>

<script>
import CandidatosView from './views/CandidatosView.vue'

export default {
  name: 'App',
  components: {
    CandidatosView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
