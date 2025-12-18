# Juego POKEMON

**Institución:** Universidad Central del Ecuador

## Descripción General
Desarrollar un juego en una página web que contiene un componente principal con la funcionalidad detallada a continuación.

---

## P1: Componente 1

### Estructura Visual Inicial
El componente debe mostrar visualmente lo siguiente:
* **Puntaje:** 0
* **Intento:** 0
* Tres cuadros negros con texto oculto "XXXXXXXXXXX" debajo de cada uno.
* Botón **JUGAR**.

### Requisitos Técnicos del Componente
1.  **Componente Interno 1.1:**
    * Está conformado por una imagen (cuadro negro) y un texto (XXXXXXXXXXX).
    * Este componente interno debe ser utilizado **3 veces** (3 instancias) dentro del Componente 1.
2.  **Estado Inicial:**
    * El Componente 1 mostrará de inicio 3 cuadros en negro (imágenes) y su respectivo nombre oculto (XXXXXXXXXXX).
    * **Recurso de imagen:** Puede usar la siguiente URL para el cuadro negro:
      `https://placehold.co/200x200/000000/000000.png`

---

## P2: Funcionalidad JUGAR

Al presionar el botón de **JUGAR**, aleatoriamente se presentarán 3 imágenes de Pokémon en lugar de las 3 imágenes en negro, y su respectivo nombre de Pokémon en lugar de las "X's".

### Consumo de API
Estas imágenes y nombres deben ser obtenidas del API Rest:
* **Datos:** `https://pokeapi.co/api/v2/pokemon/{idPokemon}`
* **Imagen (SVG):** `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{idPokemon}.svg`
  * *{idPokemon}*: representa el ID del Pokémon.

### Lógica del Juego
1.  **Selección Aleatoria:** Los 3 Pokémon aleatorios deben ser obtenidos de un **conjunto fijo de 4 Pokémon**, con el objetivo de que las probabilidades de coincidencia sean altas.
2.  **Puntajes:**
    * Si coinciden 3 imágenes: Gana **5 puntos**.
    * Si coinciden 2 imágenes: Gana **2 puntos**.
    * Si no coincide ninguna imagen: Gana **0 puntos**.
3.  **Intentos:**
    * El jugador tendrá **5 intentos** para ganar.
    * Los puntos e intentos deben ir acumulándose e incrementándose (en uno) respectivamente por cada intento (clic en JUGAR).

---

## P3: Mensajes del Juego

El Componente 1 debe tener otro componente interno (**Componente interno 1.2**).

### Componente Interno 1.2
Está conformado por 2 textos que representan los mensajes del juego y se deben presentar según los siguientes escenarios:

#### Escenario A: Juego Terminado (Derrota)
Cuando juegue su quinta (5) oportunidad y el jugador **no logre 10 puntos**:
* **Color del mensaje:** Rojo.
* **Mensaje 1:** `Ha utilizado tus 5 intentos`.
* **Mensaje 2:** `El juego a terminado, inténtelo otra vez`.

#### Escenario B: Ganador
En cualquier intento cuando el jugador logre acumular **10 o más puntos**:
* **Color del mensaje:** Azul.
* **Mensaje 1:** `Puntaje: #` (donde # es el puntaje actual).
* **Mensaje 2:** `Felicitaciones has ganado un premio de $10.000,00`.

---

## Ayuda Gráfica (Wireframe)

La estructura jerárquica de la página debe ser:

1.  **Componente 1**
    * **Puntaje:** 0 / **Intento:** 0
    * **Componente 1.1** (Instancia 1): Imagen + Texto (XXXXXXXXX)
    * **Componente 1.1** (Instancia 2): Imagen + Texto (XXXXXXXXXXX)
    * **Componente 1.1** (Instancia 3): Imagen + Texto (XXXXXXXXX)
    * **Componente 1.2**: Mensajes (Ej: "Felicitaciones has ganado...")
    * Botón **JUGAR**

---

## Notas Generales

1.  **Entrega:** Subir todo el código desarrollado a un nuevo repositorio de GitHub creado exclusivamente para la prueba, con el nombre:
    `efinal1_pw_p8_ec`
    *(Donde "ec" representa la primera letra de su nombre y apellido)*.
2.  **Tecnología:** Aplicar los conceptos aprendidos en clase para páginas web con el framework **Vue.js**.
3.  **Integridad Académica:** La prueba es individual. De existir sospecha de copia, se anula la nota completa de la prueba (teórica y práctica).
4.  **Tiempo:** La evaluación finaliza cuando el docente lo indique o cuando el estudiante entregue y salga del laboratorio.