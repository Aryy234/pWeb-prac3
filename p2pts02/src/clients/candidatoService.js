// CAPA DE SERVICIOS - Service Layer
// Responsable de la comunicación con la API externa y transformación de datos

import axios from 'axios';

// Función para obtener un candidato aleatorio desde la API
export async function obtenerCandidatoAleatorio() {
  const respuesta = await axios.get('https://randomuser.me/api/');
  const usuario = respuesta.data.results[0];
  
  // Transformación de datos de la API al formato que usará la aplicación
  return {
    foto: usuario.picture.large,
    titulo: usuario.name.title,
    nombre: usuario.name.first,
    apellido: usuario.name.last,
    email: usuario.email, // Atributo 5
    ciudad: usuario.location.city // Atributo 6
  };
}
