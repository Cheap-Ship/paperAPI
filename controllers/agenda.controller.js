const db = require("../models/db.js");
const { Op } = require("sequelize");
const Agenda = db.agenda;

exports.findAll = (req, res) => {
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

exports.create = async (req, res) => {
    const agenda = await Agenda.findOne({ where: { [Op.and]: [{ id_utilizador: req.body.id_utilizador }, { id_convidado: req.body.id_convidado }] } });
    if (!agenda) {
        Agenda.create(req.body)
            .then(data => {
                res.status(201).json({
                    message: "Nova Entrevista criada.",
                    location: { id_utilizador: data.id_utilizador, id_convidado: data.id_convidado }
                });
            })
            .catch(err => {
                if (err.name === 'SequelizeValidationError')
                    res.status(400).json({ message: err.errors[0].message });
                else
                    res.status(500).json({
                        message: err.message || "Ocorreu algum erro ao criar a Entrevista."
                    });
            });
    } else {
        Agenda.update({ data_hora: req.body.data_hora }, { where: { [Op.and]: [{ id_utilizador: req.body.id_utilizador }, { id_convidado: req.body.id_convidado }] } })
            .then(num => {
                res.status(200).json({
                    message: "Nova Entrevista criada.",
                    location: { id_utilizador: req.body.id_utilizador, id_convidado: req.body.id_convidado }
                });
            })
            .catch(err => {
                if (err.name === 'SequelizeValidationError')
                    res.status(400).json({ message: err.errors[0].message });
                else
                    res.status(500).json({
                        message: err.message || "Ocorreu algum erro ao criar a Entrevista."
                    });
            });
    }
}