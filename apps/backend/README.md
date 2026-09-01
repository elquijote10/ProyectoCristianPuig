Esta API fue creada con Express.js y permite consultar información sobre premios de fútbol que fueron otorgados a los jugadores en el Mundial de Fútbol 2026.

## Ruta 1: Obtener todos los premios
Método: GET
URL:
http://localhost:3000/api/premios

Ejemplo:
GET /api/premios
Descripción:
Devuelve todos los premios almacenados en la API.
---

## Ruta 2: Obtener un premio por ID
Método: GET
URL:
http://localhost:3000/api/premios/2
Ejemplo:
GET /api/premios/2
Descripción:
Devuelve el premio cuyo ID sea 2.
---
## Ruta 3: Buscar premios por país
Método: GET
URL:
http://localhost:3000/api/premios?pais=Argentina
Ejemplo:
GET /api/premios?pais=Argentina
Descripción:
Permite buscar premios utilizando un query string.

---
### Ruta 4: Obtener el promedio de edad de los jugadores premiados, el jugador de mayor edad y el jugador de menor edad
Método: GET
URL:
http://localhost:3000/estadisticas-jugadores
Ejemplo:
GET http://localhost:3000/estadisticas-jugadores
Descripción: 
Permite obtener el promedio de edad de los jugadores, el de mayor edad y el de de menor entre los jugadores premiados
