
//arreglo de premios futbolistas
const premios = [
    {
        id: 0,
        nombre: "Balón de Oro",
        descripcion: "se entrega al mejor jugador de todo el torneo",
        jugador: "Rodri Hernández",
        pais: "España",
        lugar_nacimiento: "Madrid, España", 
        edad: 30,
    },
    {
        id: 1,
        nombre: "Balón de Plata",
        descripcion: "se otorga al segundo mejor jugador del torneo",
        jugador: "Lionel Messi",
        pais: "Argentina",
        lugar_nacimiento: "Rosario, Argentina",
        edad: 39,
    },
    {
        id: 2,
        nombre: "Balón de Bronce",
        descripcion:"se otorga al tercer mejor jugador del torneo",
        jugador:"Kylian Mbappé",
        pais: "Francia",
        lugar_nacimiento: "París, Francia",
        edad: 27,
    },
    {
        id: 3,
        nombre: "Guante de Oro",
        descripcion: "se otorga al mejor portero",
        jugador: "Unai Simón",
        pais: "España",
        lugar_nacimiento: "Vitoria-Gasteiz, España",
        edad: 29,
    },
    {
        id: 4,
        nombre: "mejor jugador joven del torneo",
        descripcion: "reconoce al futbolista revelación menor de 21 años más destacado de cada torneo",
        jugador: "Pau Cubarsi",
        pais: "España",
        lugar_nacimiento:"Estanyol, España",
        edad: 19,
    },
    {
        id: 5,
        nombre: "Bota de Oro",
        descripcion: "se otorga al jugador que marca más goles en la fase final del torneo",
        jugador: "Kylian Mbappé",
        pais: "Francia",
        lugar_nacimiento: "París, Francia",
        edad: 27,
    },
    {
        id: 6,
        nombre: "Bota de Plata",
        descripcion: "se otorga al segundo máximo goleador del torneo",
        jugador: "Lionel Messi",
        pais: "Argentina",
        lugar_nacimiento: "Rosario, Argentina",
        edad: 39,
    },
    {
        id: 7,
        nombre: "Bota de Bronce",
        descripcion: "se otorga al tercer máximo goleador del torneo",
        jugador: "Jude Bellingham",
        pais: "Inglaterra", 
        lugar_nacimiento: "Stourbridge, Inglaterra",
        edad: 23,
    } ,
];

// 1. Obtiene y retorna la lista completa de premios
// Corresponde a la ruta GET /api/premios
const obtenerPremios = (req, res) => {
    res.json(premios);
};

/// Obtiene un solo premio por su ID
// GET /api/premios/:id
const obtenerPremioPorId = (req, res) => {
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
};

//3. Crea un nuevo premio y lo agrega al arreglo en memoria
// Corresponde a la ruta POST /api/premios

const crearPremio = (req, res) => {
    const {nombre, descripcion, jugador, pais, lugar_nacimiento, edad} = req.body;

    // Validar que nombre sea un texto y que no esté vacío
    if (typeof nombre !== "string" || nombre.trim() === ""){
        return res.status(400).json ({ 
            error: "El nombre del premio es obligatorio y debe ser un texto"
        });
    }
    // Validar que descripcion sea un texto y que no esté vacío
    if (typeof descripcion !== "string" || descripcion.trim() === ""){
        return res.status(400).json ({ 
            error: "La descripción es obligatoria y debe ser un texto"
        });
    }
    // Validar que jugador sea un texto y que no esté vacío
    if (typeof jugador !== "string" || jugador.trim() === ""){
        return res.status(400).json ({ 
            error: "El nombre del jugador es obligatorio y debe ser un texto"
        });
    }
    // Validar que pais sea un texto y que no esté vacío
    if (typeof pais !== "string" || pais.trim() === ""){
        return res.status(400).json ({ 
            error: "El país es obligatorio y debe ser un texto"
        });
    }
    // Validar que lugar_nacimiento sea un texto y que no esté vacío
    if (typeof lugar_nacimiento !== "string" || lugar_nacimiento.trim() === ""){
        return res.status(400).json ({ 
            error: "El lugar de nacimiento es obligatorio y debe ser un texto"
        });
    }
    // Validar que edad sea un número
    if (typeof edad !== "number" || edad < 15){
        return res.status(400).json ({ 
            error: "La edad debe ser un número mayor o igual a 15"
        });
    }
    const nuevoId = premios.length > 0 ? premios[premios.length - 1].id + 1 : 0;
    const nuevoPremio = {
        id: nuevoId,
        nombre,
        descripcion,
        jugador,
        pais,
        lugar_nacimiento,
        edad,
    };
    premios.push(nuevoPremio);
    res.status(201).json(nuevoPremio)
};

// 4. Actualiza los datos de un premio existente identificándolo por su ID en la URL
// Corresponde a la ruta PUT /api/premios/:id

const actualizarPremio = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    } 
    
    const premio = premios.find ((premio) => premio.id === id);
    if (!premio) {
        return res.status(404).json({ error: "Premio no encontrado" });
    }

    const { nombre, descripcion, jugador, pais, lugar_nacimiento, edad } = req.body;
    
    // Validar que nombre sea un texto y que no esté vacío
    if (typeof nombre !== "string" || nombre.trim() === ""){
        return res.status(400).json ({ 
            error: "El nombre del premio es obligatorio y debe ser un texto"
        });
    }
    // Validar que descripcion sea un texto y que no esté vacío
    if (typeof descripcion !== "string" || descripcion.trim() === ""){
        return res.status(400).json ({ 
            error: "La descripción es obligatoria y debe ser un texto"
        });
    }
    // Validar que jugador sea un texto y que no esté vacío
    if (typeof jugador !== "string" || jugador.trim() === ""){
        return res.status(400).json ({ 
            error: "El nombre del jugador es obligatorio y debe ser un texto"
        });
    }
    // Validar que pais sea un texto y que no esté vacío
    if (typeof pais !== "string" || pais.trim() === ""){
        return res.status(400).json ({ 
            error: "El país es obligatorio y debe ser un texto"
        });
    }
    // Validar que lugar_nacimiento sea un texto y que no esté vacío
    if (typeof lugar_nacimiento !== "string" || lugar_nacimiento.trim() === ""){
        return res.status(400).json ({ 
            error: "El lugar de nacimiento es obligatorio y debe ser un texto"
        });
    }
    // Validar que edad sea un número
    if (typeof edad !== "number" || edad < 15){
        return res.status(400).json ({ 
            error: "La edad debe ser un número mayor o igual a 15"
        });
    }
    premio.nombre = nombre;
    premio.descripcion = descripcion;
    premio.jugador = jugador;
    premio.pais = pais;
    premio.lugar_nacimiento = lugar_nacimiento;
    premio.edad = edad;
    res.json(premio);
};

// 5. Elimina un premio existente del arreglo por su ID
// Corrresponde a la ruta DELETE /api/premios/:id

const eliminarPremio = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    const indice = premios.findIndex((c) => c.id === id);
    if (indice === -1) {
        return res.status(404).json({ error: "Premio no encontrado" });
    }
    premios.splice(indice,1); 
    res.status(204).send();
};

module.exports = {
    obtenerPremios,
    obtenerPremioPorId,
    crearPremio,
    actualizarPremio,
    eliminarPremio,
};


