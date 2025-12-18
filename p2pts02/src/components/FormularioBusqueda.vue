<template>
  <!-- COMPONENTE PRESENTACIONAL - Componente 1 -->
  <!-- Responsable de renderizar el formulario y emitir eventos al padre -->
  <div class="formulario">
    <h2>Buscar Candidato</h2>
    
    <!-- Fotografía del candidato -->
    <img v-if="candidato.foto" :src="candidato.foto" alt="Foto del candidato" class="foto">
    
    <!-- Campos del formulario -->
    <div class="campo">
      <label>Título:</label>
      <input type="text" v-model="candidato.titulo" readonly>
    </div>
    
    <div class="campo">
      <label>Nombre:</label>
      <input type="text" v-model="candidato.nombre" readonly>
    </div>
    
    <div class="campo">
      <label>Apellido:</label>
      <input type="text" v-model="candidato.apellido" readonly>
    </div>
    
    <div class="campo">
      <label>Email:</label>
      <input type="text" v-model="candidato.email" readonly>
    </div>
    
    <div class="campo">
      <label>Ciudad:</label>
      <input type="text" v-model="candidato.ciudad" readonly>
    </div>
    
    <!-- Botones de acción -->
    <div class="botones">
      <button @click="buscarCandidato">Buscar</button>
      <button @click="agregarCandidato">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormularioBusqueda',
  
  // Props recibidos del componente padre
  props: {
    candidato: {
      type: Object,
      required: true
    }
  },
  
  methods: {
    // Emite evento al padre para buscar un nuevo candidato
    buscarCandidato() {
      this.$emit('buscar');
    },
    
    // Emite evento al padre para agregar el candidato actual a la lista
    agregarCandidato() {
      this.$emit('agregar');
    }
  }
}
</script>

<style scoped>
.formulario { padding: 20px; border: 2px solid #5C7CFA; border-radius: 15px; }
.foto { width: 150px; border-radius: 10px; }
.campo { margin: 10px 0; }
.campo label { color: #5C7CFA; font-weight: bold; }
.campo input { border: 1px solid #5C7CFA; padding: 5px; border-radius: 5px; width: 100%; }
.botones button { margin: 5px; padding: 10px 20px; }
</style>
