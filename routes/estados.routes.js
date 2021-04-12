const express = require('express');
let router = express.Router();
const estadosController = require('../controllers/estados.controller.js');

// middleware for all routes related with tutorials
router.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => { //finish event is emitted once the response is sent to the client
        const diffSeconds = (Date.now() - start) / 1000; //figure out how many seconds elapsed
        console.log(`${req.method} ${req.originalUrl} completed in ${diffSeconds} seconds`);
    });
    next()
})

router.get('/', estadosController.findAll);

// router.post('/', estadosController.create);

// router.get('/published', estadosController.findAllPublished);

// router.get('/:tutorialID', estadosController.findOne);

// router.put('/:tutorialID', estadosController.update);

// router.delete('/:tutorialID', estadosController.delete);

//send a predefined error message for invalid routes on TUTORIALS
router.all('*', function (req, res) {
    res.status(404).json({ message: 'TUTORIALS: what???' });
})

// EXPORT ROUTES (required by APP)
module.exports = router;