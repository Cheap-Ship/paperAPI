const db = require("../models/db.js");
const Tipo_proposta = db.tipo_proposta;

exports.findAll =  (req, res) => {
    Tipo_proposta.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Tipos de proposta não encontrados.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({
            message: `Erro a obter Tipos de proposta: ${err.message}`
        });
    });
};