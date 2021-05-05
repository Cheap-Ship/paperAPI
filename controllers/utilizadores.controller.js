const db = require("../models/db.js");
const Utilizador = db.utilizador;

exports.findAll =  (req, res) => {
    Utilizador.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Utilizadores não encontrados.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({
            message: `Erro a obter Utilizadores: ${err.message}`
        });
    });
};