const db = require("../models/db.js");
const { Op } = require("sequelize");
const Utilizador = db.utilizador;

exports.findAll = (req, res) => {
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

exports.update = (req, res) => {
    Utilizador.update(req.body, { where: { id_utilizador: req.params.utilizadorID } })
        .then(num => {
            if (num == 1) {
                res.status(200).json({
                    message: `Utilizador com id=${req.params.utilizadorID} foi atualizado com sucesso.`
                });
            } else {
                Utilizador.findByPk(req.params.utilizadorID)
                    .then(data => {
                        if (data === null)
                            res.status(404).json({
                                message: `Utilizador com id=${req.params.utilizadorID} não foi encontrado.`
                            });
                        else if (JSON.stringify(data) == JSON.stringify(req.body)) {
                            res.status(200).json({
                                message: `Utilizador com id=${req.params.utilizadorID} foi atualiazdo com sucesso.`
                            });
                        }
                        else
                            res.status(400).json({
                                message: `Faltam parâmetros para editar o Utilizador com id=${req.params.utilizadorID}.`
                            });
                    })
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
                message: err.message || `Ocorreu algum erro ao eliminar o Utilizador com id=${req.params.utilizadorID}.`
            });
        });
}

exports.findNotApproved = (req, res) => {
    Utilizador.findAll({ where: { id_estado: 1 } })
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

exports.findApproved = (req, res) => {
    Utilizador.findAll({ where: { id_estado: { [Op.ne]: 1 }, id_tipo: req.body.id_tipo } })
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