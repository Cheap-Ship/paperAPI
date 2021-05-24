const db = require("../models/db.js");
const Agenda = db.agenda;

exports.findAll =  (req, res) => {
    Agenda.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Entrevistas não encontradas.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({
            message: `Erro a obter Agenda: ${err.message}`
        });
    });
};