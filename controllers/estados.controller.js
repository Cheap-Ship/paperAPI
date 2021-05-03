const db = require("../models/db.js");
const Estado = db.estado;

exports.findAll =  (req, res) => {
    Estado.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Estados não encontrados.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({
            message: `Erro a obter Estados.`
        });
    });
};