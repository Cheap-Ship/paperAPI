const db = require("../models/db.js");
const Estagio = db.estagio;

exports.findAll =  (req, res) => {
    Estagio.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Estágios não encontrados.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({
            message: `Erro a obter Estágios: ${err.message}`
        });
    });
};

exports.create = (req, res) => {
    Estagio.create(req.body)
    .then(data => {
        res.status(201).json({ message: "Novo estágio criado.", location: {id_proposta: data.id_proposta, id_empresa: data.id_empresa}});
    })
    .catch(err => {
        if (err.name === 'SequelizeValidationError')
            res.status(400).json({ message: err.errors[0].message });
        else
            res.status(500).json({
                message: err.message || "Ocorreu algum erro ao criar o Estágio."
            });
    });
}