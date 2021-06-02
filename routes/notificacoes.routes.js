const express = require('express');
let router = express.Router();
const notifacacoesController = require('../controllers/notificacoes.controller');
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
    .get(authController.verifyToken, notifacacoesController.findAll)
    .post(authController.verifyToken, notifacacoesController.create);

router.all('*', function (req, res) {
    res.status(404).json({ message: 'NOTIFICAÇÕES: what???' });
})

// EXPORT ROUTES (required by APP)
module.exports = router;