# P2: Funcionalidad JUGAR

## 1. Consumo de API
[cite_start]Al presionar el botón de **"JUGAR"** se debe consumir una API externa por cada instancia del componente hijo[cite: 97].

* [cite_start]**Endpoint:** `https://yesno.wtf/api`[cite: 98].
* [cite_start]**Frecuencia:** Se debe consumir la API **3 veces** (una por cada imagen/cuadro) para obtener nuevos datos aleatorios en cada jugada[cite: 99].

## 2. Actualización de Datos (Mapeo)
Con la respuesta (JSON) de la API, se deben actualizar los elementos visuales de la siguiente manera:
* [cite_start]**Imagen:** Se reemplaza por el valor del atributo `image` del JSON[cite: 100].
* [cite_start]**Texto Oculto:** Se reemplaza por el valor del atributo `answer` del JSON[cite: 101].

## 3. Reglas de Puntuación
El puntaje se acumula dependiendo de cuántos resultados sean **"yes"** en los textos obtenidos:

* [cite_start]**3 coincidencias "yes":** Gana **5 puntos**[cite: 111].
* [cite_start]**2 coincidencias "yes":** Gana **2 puntos**[cite: 112].
* [cite_start]**1 coincidencia "yes":** Gana **1 punto**[cite: 113].
* [cite_start]**0 coincidencias "yes":** Gana **0 puntos**[cite: 114].

## 4. Control de Intentos y Victoria
* [cite_start]**Intentos:** El jugador tiene un máximo de **5 intentos**[cite: 115].
* [cite_start]**Incremento:** El contador de intentos debe aumentar en **uno** cada vez que se presiona el botón "JUGAR"[cite: 116].
* [cite_start]**Condición de Victoria:** Se considera que el jugador gana cuando acumula **10 o más puntos** dentro de los intentos permitidos[cite: 115].