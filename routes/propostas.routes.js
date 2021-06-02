const express = require('express');
let router = express.Router();
const propostasController = require('../controllers/propostas.controller');
const authController = require("../controllers/auth.controller");

router.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => { //finish event is emitted once the response is sent to the client
        const diffSeconds = (Date.now() - start) / 1000; //figure out how many seconds elapsed
        console.log(`${req.method} ${req.originalUrl} completed in ${diffSeconds} seconds`);
    });
    next()
})

router.route('/')
    .get(authController.verifyToken, propostasController.findAll)
    .post(authController.verifyToken, propostasController.create);

router.route('/notApproved')
    .get(authController.verifyToken, propostasController.findNotApproved);

router.route('/:propostaID')
    .put(authController.verifyToken, propostasController.update)
    .delete(authController.verifyToken, propostasController.delete);

router.all('*', function (req, res) {
    res.status(404).json({ message: 'PROPOSTAS: what???' });
})

// EXPORT ROUTES (required by APP)
module.exports = router;