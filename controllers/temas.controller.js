const db = require("../models/db.js");
const Tema = db.tema;

exports.findAll =  (req, res) => {
    Tema.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Temas não encontrados.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({
            message: `Erro a obter Temas: ${err.message}`
        });
    });
};