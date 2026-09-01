const express = require('express');
const app = express ();
app.use (express.json()); //middleware para parsear el body de las peticiones en formato JSON

//arreglo de premios
const premios = [
    {
        id: 0,
        nombre: "Balón de Oro",
        descripcion: "se entrega al mejor jugador de todo el torneo",
        jugador: "Rodri Hernández",
        pais: "España",
        lugar_nacimiento: "Madrid, España", 
        fecha_nacimiento: "22 de junio de 1996",
        edad: 30,
    },
    {
        id: 1,
        nombre: "Balón de Plata",
        descripcion: "se otorga al segundo mejor jugador del torneo",
        jugador: "Lionel Messi",
        pais: "Argentina",
        lugar_nacimiento: "Rosario, Argentina",
        fecha_nacimiento: "24 de junio de 1987",
        edad: 39,
    },
    {
        id: 2,
        nombre: "Balón de Bronce",
        descripcion:"se otorga al tercer mejor jugador del torneo",
        jugador:"Kylian Mbappé",
        pais: "Francia",
        lugar_nacimiento: "París, Francia",
        fecha_nacimiento: "20 de diciembre de 1998",
        edad: 27,
    },
    {
        id: 3,
        nombre: "Guante de Oro",
        descripcion: "se otorga al mejor portero",
        jugador: "Unai Simón",
        pais: "España",
        lugar_nacimiento: "Vitoria-Gasteiz, España",
        fecha_nacimiento: "11 de junio de 1997",
        edad: 29,
    },
    {
        id: 4,
        nombre: "mejor jugador joven del torneo",
        descripcion: "reconoce al futbolista revelación menor de 21 años más destacado de cada torneo",
        jugador: "Pau Cubarsi",
        pais: "España",
        lugar_nacimiento:"Estanyol, España",
        fecha_nacimiento:"22 de enero de 2007",
        edad: 19,
    },
    {
        id: 5,
        nombre: "Bota de Oro",
        descripcion: "se otorga al jugador que marca más goles en la fase final del torneo",
        jugador: "Kylian Mbappé",
        pais: "Francia",
        lugar_nacimiento: "París, Francia",
        fecha_nacimiento: "20 de diciembre de 1998",
        edad: 27,
    },
    {
        id: 6,
        nombre: "Bota de Plata",
        descripcion: "se otorga al segundo máximo goleador del torneo",
        jugador: "Lionel Messi",
        pais: "Argentina",
        lugar_nacimiento: "Rosario, Argentina",
        fecha_nacimiento: "24 de junio de 1987",
        edad: 39,
    },
    {
        id: 7,
        nombre: "Bota de Bronce",
        descripcion: "se otorga al tercer máximo goleador del torneo",
        jugador: "Jude Bellingham",
        pais: "Inglaterra", 
        lugar_nacimiento: "Stourbridge, Inglaterra",
        fecha_nacimiento: "29 de junio de 2003",
        edad: 23,
    } ,
];

// ruta basica
app.get("/", (req, res) => {
    res.send("Hola desde express");
});


// 1. ruta  que retorna todos los premios tal cual
// URL: http://localhost:3000/api/premios
app.get("/api/premios", (req, res) => {
    res.json(premios);
});

// 2. ruta con params: Obtiene un solo premio por su ID exacto
// URL: http://localhost:3000/api/premios/1
app.get("/api/premios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    const premio = premios.find((c) => c.id === id);
if (premio) {
        res.json(premio);
    } else {
        res.status(404).json({ error: "Premio no encontrado" });
    }
});

// 3. Filtrar elementos utilizando un query string 
app.get("/api/premios", (req, res) => {
    const pais = req.query.pais;
    const resultado = premios.filter (
        (p) => p.pais.toLowerCase() === pais.toLowerCase ()
    );
    res.json(resultado);
});

app.listen(3000, () => {console.log('Servidor corriendo en puerto 3000');});

// 4. Determinar el promedio de edad de los jugadores premiados, el jugador más joven y el jugador más viejo
app.get("/estadisticas-jugadores", (req,res) => {
    if (premios.length === 0){
        return res.json({ mensaje: "No hay jugadores registrados para calcular estadísticas "});
    }
    const stats = premios.reduce((acumulador, jugadorActual) => {
        // Se suma la edad para el promedio
        acumulador.sumaEdades += jugadorActual.edad;

        // Se compara para encontrar al jugador de mayor edad
        if (jugadorActual.edad > acumulador.mayorEdad.edad) {
        acumulador.mayorEdad = jugadorActual;
        }

        // Se compara para encontrar al jugador de menor edad
        if (jugadorActual.edad < acumulador.menorEdad.edad) {
        acumulador.menorEdad = jugadorActual;
        }
        return acumulador;
    },{
        sumaEdades: 0,
        mayorEdad: premios[0],
        menorEdad: premios[0] 
    });
    res.json({
        totaljugadores: premios.length,
        promedioEdad: Number((stats.sumaEdades/premios.length).toFixed(1)),
        jugadorMasGrande: stats.mayorEdad,
        jugadorMasJoven: stats.menorEdad,
    });
});



/*
app.get('/',(req, res) => {res.send ('Hola Mundo')});
app.listen(3000, () => {console.log('Servidor corriendo en puerto 3000');});
*/