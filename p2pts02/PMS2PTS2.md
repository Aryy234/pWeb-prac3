# Aprobación de Candidatos

**Institución:** Universidad Central del Ecuador

## Descripción General
[cite_start]Desarrollar en **Vue.js** la siguiente página web, que contenga dos componentes independientes[cite: 145]:

1.  **Componente 1:** Formulario de búsqueda y visualización de datos individuales.
2.  **Componente 2:** Tabla/Lista de candidatos agregados.

---

## P1: Buscar Candidato (Componente 1)

### Estructura del Formulario
[cite_start]Desarrollar un formulario de datos personales con los siguientes 6 atributos y elementos visuales[cite: 166]:
* Fotografía
* Título
* Nombre
* Apellido
* Atributo 5 (A elección del estudiante)
* Atributo 6 (A elección del estudiante)
* Botón **Buscar**
* Botón **Agregar**

### Funcionalidad "Buscar"
[cite_start]Cada vez que se dé clic en el botón **"Buscar"**, se deben consultar los 6 atributos desde la API externa[cite: 181].

* [cite_start]**API Endpoint:** `https://randomuser.me/api/` [cite: 182]

### Mapeo de Datos
[cite_start]Los valores del formulario deben ser llenados con la respuesta de la API de acuerdo con el siguiente detalle [cite: 183-190]:

1.  **Fotografía:** Valor del atributo `large` del objeto de respuesta.
2.  **Título:** Valor del atributo `title`.
3.  **Nombre:** Valor del atributo `first`.
4.  **Apellido:** Valor del atributo `last`.
5.  **Atributo 5:** Usted debe elegir un atributo **cualquiera** del objeto de respuesta de la API y llenarlo con su valor.
6.  **Atributo 6:** Usted debe elegir un atributo **cualquiera** del objeto de respuesta de la API y llenarlo con su valor.

---

## P2: Agregar Candidato (Componente 2)

### Funcionalidad "Agregar"
[cite_start]Al presionar el botón **"Agregar"** en el Componente 1, se deben enviar los datos (Título, Nombre, Apellido, Atributo 5 y Atributo 6) hacia la lista de candidatos (Componente 2) para que se agregue como un ítem adicional[cite: 192].

* [cite_start]**Comportamiento:** La lista debe mostrar todos los candidatos que se van agregando dinámicamente[cite: 193].

### Requisito Técnico
* [cite_start]**Comunicación entre componentes:** Para enviar los datos del Componente 1 al Componente 2, **use PROPS**[cite: 204].

### Estructura Visual de la Lista (Componente 2)
[cite_start]Debe visualizarse como una tabla con las siguientes columnas[cite: 164, 178]:
| Título | Nombre | Apellido | Atributo 5 | Atributo 6 |
| :--- | :--- | :--- | :--- | :--- |
| Ms | Edison | Cayambe | Valor 5 | Valor 6 |
| . | . | . | . | . |

---

## Notas Generales

1.  **Repositorio:** Subir todo el código desarrollado a un nuevo repositorio de GitHub creado exclusivamente para la prueba, con el nombre:
    `efinal1_pw_p7_ec`
    [cite_start]*(Donde "ec" representa la primera letra de su nombre y apellido)*[cite: 206].
2.  [cite_start]**Estilos:** Aplicar estilos CSS básicos para que su página sea similar a las imágenes de referencia del Componente 1 y 2[cite: 207].
3.  [cite_start]**Tecnología:** Aplicar los conceptos aprendidos en clase para páginas web con el framework **Vue.js**[cite: 207].
4.  **Integridad Académica:** La prueba es individual. De existir sospecha de copia se anula la nota completa. [cite_start]No se puede usar código de talleres, tareas pasadas ni de la web[cite: 208].
5.  [cite_start]**Tiempo:** La evaluación finaliza cuando el docente lo indique o cuando el estudiante entregue y salga del laboratorio[cite: 209].