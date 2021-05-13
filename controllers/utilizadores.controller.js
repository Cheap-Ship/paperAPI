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

exports.create = (req, res) => {
    Utilizador.create(req.body)
    .then(data => {
        res.status(201).json({ message: "Novo utilizador criado.", location: "/utilizadores/" + data.id_utilizador });
    })
    .catch(err => {
        if (err.name === 'SequelizeValidationError')
            res.status(400).json({ message: err.errors[0].message });
        else
            res.status(500).json({
                message: err.message || "Ocorreu algum erro ao criar o Utilizador."
            });
    });
}

exports.update = (req, res) => {
    Utilizador.update(req.body, { where: { id_utilizador: req.params.utilizadorID } })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: `Utilizador com id=${req.params.utilizadorID} foi atualiazdo com sucesso.`
                });
            } else {
                res.status(404).json({
                    message: `Utilizador com id=${req.params.utilizadorID} não foi encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || `Ocorreu algum erro ao atualizar o Utilizador com id=${req.params.utilizadorID}.`
            });
        });
};

exports.delete = (req, res) => {
    Utilizador.destroy({ where: { id_utilizador: req.params.utilizadorID } })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: `Utilizador com id=${req.params.utilizadorID} foi eliminado com sucesso.`
                });
            } else {
                res.status(404).json({
                    message: `Utilizador com id=${req.params.utilizadorID} não foi encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || `Ocorreu algum erro ao eliminar o Utilizador com id=${req.params.utilizadorID}..`
            });
        });
}