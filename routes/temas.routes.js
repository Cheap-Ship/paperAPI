const express = require('express');
let router = express.Router();
const temaController = require('../controllers/temas.controller');

router.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => { //finish event is emitted once the response is sent to the client
        const diffSeconds = (Date.now() - start) / 1000; //figure out how many seconds elapsed
        console.log(`${req.method} ${req.originalUrl} completed in ${diffSeconds} seconds`);
    });
    next()
})

router.route('/').get(temaController.findAll);

router.all('*', function (req, res) {
    res.status(404).json({ message: 'TEMAS: what???' });
})

// EXPORT ROUTES (required by APP)
module.exports = router;