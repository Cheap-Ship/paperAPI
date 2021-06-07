const db = require("../models/db.js");
const Notificacao = db.notificacao;

exports.findAll = (req, res) => {
    Notificacao.findAll()
        .then(data => {
            data === null ?
                res.status(404).json({ message: `Notificações não encontradas.` }) :
                res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: `Erro a obter Notificações: ${err.message}`
            });
        });
};

exports.create = (req, res) => {
    Notificacao.create(req.body)
        .then(data => {
            res.status(201).json({ message: "Nova Notificação criada.", location: data.null });
        })
        .catch(err => {
            if (err.name === 'SequelizeValidationError')
                res.status(400).json({ message: err.errors[0].message });
            else
                res.status(500).json({
                    message: err.message || "Ocorreu algum erro ao criar a Notificação."
                });
        });
}