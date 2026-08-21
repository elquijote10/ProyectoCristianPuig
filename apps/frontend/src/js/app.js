

const campeon = document.getElementById("campeon");
    campeon.addEventListener("click", () => {
    campeon.style.color = "black";
    campeon.textContent = "¡Sííí España es el campeón!";});

const subcampeon = document.getElementById("subcampeon");
    subcampeon.addEventListener("click", () => {
    subcampeon.style.color = "black";
    subcampeon.textContent = "¡Sííí Argentina es el subcampeón!";});

const miTitulo = document.querySelector('.titulo');
    miTitulo.addEventListener("click", async () => {
    miTitulo.textContent = "Cargando lista de Usuarios...";

    try {
    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users");
    const listaUsuarios = await respuesta.json();
    miTitulo.textContent = "¡Lista de usuarios creada!";
    for (let usuario of listaUsuarios) {
        const elementoUsuario = document.createElement ("p");
        elementoUsuario.textContent = `Usuario: ${usuario.name} - Correo ${usuario.email}`;
        document.body.appendChild(elementoUsuario);
    }
} catch (error){
  console.error("Error al obtener usuarios:",error);
  miTitulo.textContent = "Error al cargar datos.";
}
});