/*
const { response } = require("../../../backend/src/app");
*/

const campeon = document.getElementById("campeon");

campeon.addEventListener("click", () => {
    campeon.style.color = "black";
    campeon.textContent = "¡Sííí España es el campeón!";
});

const subcampeon = document.getElementById("subcampeon");

subcampeon.addEventListener("click", () => {
    subcampeon.style.color = "black";
    subcampeon.textContent = "¡Sííí Argentina es el subcampeón!";
});

const miTitulo = document.querySelector('.titulo');
    miTitulo.addEventListener("click", async () => {
    miTitulo.textContent = "Cargando lista de jugadores Premiados...";

    try {
    const respuesta = await fetch ("http://localhost:3000/api/premios/");
    const listaPremios = await respuesta.json();
    miTitulo.textContent = "¡Lista de de jugadores premiados creada!";
    for (let premio of listaPremios) {
        const elementoPremio = document.createElement ("p");
        elementoPremio.textContent = `Nombre: ${premio.nombre} - Descripción: ${premio.descripcion} - Jugador: ${premio.jugador} - País: ${premio.pais} - Lugar de Nacimiento: ${premio.lugar_nacimiento} - Edad: ${premio.edad}`;
        document.body.appendChild(elementoPremio);
    }
} catch (error){
  console.error("Error al obtener jugadores premiados:",error);
  miTitulo.textContent = "Error al cargar datos.";
}
});

