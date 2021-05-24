const express = require('express');
let router = express.Router();
const inscricoesController = require('../controllers/inscricoes.controller');

router.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => { //finish event is emitted once the response is sent to the client
        const diffSeconds = (Date.now() - start) / 1000; //figure out how many seconds elapsed
        console.log(`${req.method} ${req.originalUrl} completed in ${diffSeconds} seconds`);
    });
    next()
})

router.route('/')
    .get(inscricoesController.findAll)
    .post(inscricoesController.create);

router.route('/:inscricaoID')
    .put(inscricoesController.update)
    .delete(inscricoesController.delete);

router.all('*', function (req, res) {
    res.status(404).json({ message: 'INSCRIÇÕES: what???' });
})

// EXPORT ROUTES (required by APP)
module.exports = router;