import axios from 'axios';

// Cliente para consumir la API de yesno.wtf
// Esta capa se encarga de la comunicación con la API externa

const API_URL = 'https://yesno.wtf/api';

// Función que obtiene una respuesta aleatoria de la API
// Retorna un objeto con answer (yes/no/maybe) e image (URL de la imagen)
export const obtenerRespuesta = async () => {
  const respuesta = await axios.get(API_URL);
  return respuesta.data;
};
