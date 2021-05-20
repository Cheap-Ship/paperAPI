const db = require("../models/db.js");
const Tipo_utilizador = db.estado;

exports.findAll =  (req, res) => {
    Tipo_utilizador.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Tipos de utilizador não encontrados.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({
            message: `Erro a obter Tipos de utilizador: ${err.message}`
        });
    });
};