const db = require("../models/db.js");
const Empresa = db.empresa;

exports.findAll =  (req, res) => {
    Empresa.findAll()
    .then(data => {
        data === null ?
            res.status(404).json({ message: `Empresas não encontrados.` }) :
            res.status(200).json(data); 
    })
    .catch(err => {
        res.status(500).json({
            message: `Erro a obter Empresas: ${err.message}`
        });
    });
};

exports.create = (req, res) => {
    Empresa.create(req.body)
    .then(data => {
        res.status(201).json({ message: "Nova Empresa criada.", location: data.id_empresa});
    })
    .catch(err => {
        if (err.name === 'SequelizeValidationError')
            res.status(400).json({ message: err.errors[0].message });
        else
            res.status(500).json({
                message: err.message || "Ocorreu algum erro ao criar a Empresa."
            });
    });
}