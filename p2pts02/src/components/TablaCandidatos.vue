<template>
  <!-- COMPONENTE PRESENTACIONAL - Componente 2 -->
  <!-- Responsable de renderizar la tabla de candidatos basada en props -->
  <div class="tabla-candidatos">
    <h2>Lista de Candidatos</h2>
    
    <table v-if="candidatos.length > 0">
      <thead>
        <tr>
          <th>Título</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <!-- Itera sobre el array de candidatos recibido por props -->
        <tr v-for="(candidato, index) in candidatos" :key="index">
          <td>{{ candidato.titulo }}</td>
          <td>{{ candidato.nombre }}</td>
          <td>{{ candidato.apellido }}</td>
          <td>{{ candidato.email }}</td>
          <td>{{ candidato.ciudad }}</td>
        </tr>
      </tbody>
    </table>
    
    <p v-else>No hay candidatos agregados</p>
  </div>
</template>

<script>
export default {
  name: 'TablaCandidatos',
  
  // Recibe la lista de candidatos desde el componente padre mediante props
  props: {
    candidatos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.tabla-candidatos { padding: 20px; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
th { background-color: #f0f0f0; }
</style>
