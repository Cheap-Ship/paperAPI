const db = require("../models/db.js");
const { Op } = require("sequelize");
const Inscricao = db.inscricao;

exports.findAll = (req, res) => {
    Inscricao.findAll()
        .then(data => {
            data === null ?
                res.status(404).json({ message: `Incrições não encontradas.` }) :
                res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: `Erro a obter Inscrições: ${err.message}`
            });
        });
};

exports.create = (req, res) => {
    Inscricao.create(req.body)
        .then(data => {
            res.status(201).json({ message: "Nova Inscrição criada.", location: data.null });
        })
        .catch(err => {
            if (err.name === 'SequelizeValidationError')
                res.status(400).json({ message: err.errors[0].message });
            else
                res.status(500).json({
                    message: err.message || "Ocorreu algum erro ao criar a Inscrição."
                });
        });
}

exports.update = (req, res) => {
    Inscricao.update(req.body, { where: { id_inscricao: req.params.inscricaoID } })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: `Inscrição com id=${req.params.inscricaoID} foi atualizada com sucesso.`
                });
            } else {
                Inscricao.findByPk(req.params.inscricaoID)
                    .then(data => {
                        if (data === null)
                            res.status(404).json({
                                message: `Inscrição com id=${req.params.inscricaoID} não foi encontrada.`
                            });
                        else if (JSON.stringify(data) == JSON.stringify(req.body)) {
                            res.status(200).json({
                                message: `Inscrição com id=${req.params.inscricaoID} foi atualiazda com sucesso.`
                            });
                        }
                        else
                            res.status(400).json({
                                message: `Faltam parâmetros para editar a Inscrição com id=${req.params.inscricaoID}.`
                            });
                    })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || `Ocorreu algum erro ao atualizar a Inscrição com id=${req.params.inscricaoID}.`
            });
        });
};

exports.delete = (req, res) => {
    Inscricao.destroy({ where: { id_inscricao: req.params.inscricaoID } })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: `Inscrição com id=${req.params.inscricaoID} foi eliminada com sucesso.`
                });
            } else {
                res.status(404).json({
                    message: `Inscrição com id=${req.params.inscricaoID} não foi encontrada.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || `Ocorreu algum erro ao eliminar a Inscrição com id=${req.params.inscricaoID}.`
            });
        });
}

exports.findNotApproved = (req, res) => {
    Inscricao.findAll({ where: { id_estado: { [Op.or]: [1, req.body.admin ? 5 : 4] } } })
        .then(data => {
            data === null ?
                res.status(404).json({ message: `Inscrições não encontrados.` }) :
                res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: `Erro a obter Inscrições: ${err.message}`
            });
        });
};