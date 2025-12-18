<template>
  <!-- COMPONENTE CONTENEDOR - Vista Principal -->
  <!-- Responsable de manejar el estado y coordinar los componentes presentacionales -->
  <div class="candidatos-view">
    <h1>Aprobación de Candidatos</h1>
    
    <!-- Componente 1: Formulario de búsqueda -->
    <!-- Se le pasa el candidato actual por props y escucha eventos -->
    <FormularioBusqueda 
      :candidato="candidatoActual" 
      @buscar="manejarBusqueda"
      @agregar="manejarAgregar"
    />
    
    <!-- Componente 2: Tabla de candidatos -->
    <!-- Se le pasa la lista de candidatos por props -->
    <TablaCandidatos :candidatos="listaCandidatos" />
  </div>
</template>

<script>
// Importa el servicio de la capa de servicios
import { obtenerCandidatoAleatorio } from '@/clients/candidatoService';
// Importa los componentes presentacionales
import FormularioBusqueda from '@/components/FormularioBusqueda.vue';
import TablaCandidatos from '@/components/TablaCandidatos.vue';

export default {
  name: 'CandidatosView',
  
  components: {
    FormularioBusqueda,
    TablaCandidatos
  },
  
  data() {
    return {
      // Estado: candidato actual mostrado en el formulario
      candidatoActual: {
        foto: '',
        titulo: '',
        nombre: '',
        apellido: '',
        email: '',
        ciudad: ''
      },
      // Estado: lista de candidatos agregados
      listaCandidatos: []
    };
  },
  
  methods: {
    // Llama al servicio para obtener un nuevo candidato aleatorio
    async manejarBusqueda() {
      const candidato = await obtenerCandidatoAleatorio();
      this.candidatoActual = candidato;
    },
    
    // Agrega el candidato actual a la lista de candidatos
    manejarAgregar() {
      if (this.candidatoActual.nombre) {
        this.listaCandidatos.push({ ...this.candidatoActual });
      }
    }
  }
}
</script>

<style scoped>
.candidatos-view { max-width: 1200px; margin: 0 auto; }
h1 { text-align: center; }
</style>
