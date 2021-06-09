const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/auth.config.js");
const { Op } = require("sequelize");
const db = require("../models/db.js");
const User = db.utilizador;

exports.signup = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                [Op.or]: [{ correio: req.body.correio },
                { numero_estudante: { [Op.and]: [req.body.numero_estudante, { [Op.not]: { [Op.is]: null } }] } }]
            }
        });
        if (user)
            return res.status(400).json({ message: "Email ou número de estudante já estão em uso." });
        req.body.passe = bcrypt.hashSync(req.body.passe, 8);
        user = await User.create(req.body);
        return res.status(201).json({ message: "Novo Utilizador criado.", location: user.null });
        //Definir uma chave primária no sequelize faz com que ele a retorne com o nome null ^
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    };
};

exports.signin = async (req, res) => {
    try {
        let user = await User.findOne({ where: { correio: req.body.correio } });
        if (!user) return res.status(404).json({ message: "Utilizador não encontrado." });
        const passwordIsValid = bcrypt.compareSync(req.body.passe, user.passe);
        if (!passwordIsValid) return res.status(401).json({ accessToken: null, message: "Password inválida." });
        const token = jwt.sign({ id: user.id_utilizador }, config.secret, {
            expiresIn: req.body.manter_conectado ? 60 * 60 * 24 * 30 : 60 * 60 * 24
        });
        return res.status(200).json({
            id_utilizador: user.id_utilizador, id_estado: user.id_estado, nome: user.nome, apelido: user.apelido,
            correio: user.correio, passe: user.passe, id_tipo: user.id_tipo, numero_estudante: user.numero_estudante,
            nome_empresa: user.nome_empresa, cca: user.cca, foto: user.foto, cv: user.cv, portfolio: user.portfolio,
            facebook: user.facebook, instagram: user.instagram, github: user.github, discord: user.discord,
            ano: user.ano, accessToken: token
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
};

exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Sessão expirada." });
        }
        req.loggedUserId = decoded.id;
        next();
    });
};

exports.verifySession = async (req, res) => {
    try {
        res.status(200).json({ message: "Sessão Válida." });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    };
};

exports.isCCA = async (req, res, next) => {
    let user = await User.findByPk(req.loggedUserId);
    if (user.cca)
        next();
    else
        return res.status(403).send({ message: "Acesso Negado." });
};

exports.isCCAOrLoggedUser = async (req, res, next) => {
    let user = await User.findByPk(req.loggedUserId);
    if (user.cca || user.id_utilizador == req.params.utilizadorID)
        next();
    else
        return res.status(403).send({ message: "Acesso Negado." });
};