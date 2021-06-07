const db = require("../models/db.js");
const { Op } = require("sequelize");
const Proposta = db.proposta;

exports.findAll = (req, res) => {
    Proposta.findAll()
        .then(data => {
            data === null ?
                res.status(404).json({ message: `Propostas não encontradas.` }) :
                res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: `Erro a obter Propostas: ${err.message}`
            });
        });
};

exports.create = (req, res) => {
    Proposta.create(req.body)
        .then(data => {
            console.log(data)
            res.status(201).json({ message: "Nova Proposta criada.", location: data.null });
        })
        .catch(err => {
            if (err.name === 'SequelizeValidationError')
                res.status(400).json({ message: err.errors[0].message });
            else
                res.status(500).json({
                    message: err.message || "Ocorreu algum erro ao criar a Proposta."
                });
        });
}

exports.update = (req, res) => {
    Proposta.update(req.body, { where: { id_proposta: req.params.propostaID } })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: `Proposta com id=${req.params.propostaID} foi atualizada com sucesso.`
                });
            } else {
                Proposta.findByPk(req.params.propostaID)
                    .then(data => {
                        if (data === null)
                            res.status(404).json({
                                message: `Proposta com id=${req.params.propostaID} não foi encontrada.`
                            });
                        else if (JSON.stringify(data) == JSON.stringify(req.body)) {
                            res.status(200).json({
                                message: `Proposta com id=${req.params.propostaID} foi atualiazda com sucesso.`
                            });
                        }
                        else
                            res.status(400).json({
                                message: `Faltam parâmetros para editar a Proposta com id=${req.params.propostaID}.`
                            });
                    })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || `Ocorreu algum erro ao atualizar a Proposta com id=${req.params.propostaID}.`
            });
        });
};

exports.delete = (req, res) => {
    Proposta.destroy({ where: { id_proposta: req.params.propostaID } })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: `Proposta com id=${req.params.propostaID} foi eliminada com sucesso.`
                });
            } else {
                res.status(404).json({
                    message: `Proposta com id=${req.params.propostaID} não foi encontrada.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || `Ocorreu algum erro ao eliminar a Proposta com id=${req.params.propostaID}.`
            });
        });
}

exports.findNotApproved = (req, res) => {
    Proposta.findAll({ where: { id_estado: 1 } })
        .then(data => {
            data === null ?
                res.status(404).json({ message: `Propostas não encontrados.` }) :
                res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: `Erro a obter Propostas: ${err.message}`
            });
        });
};