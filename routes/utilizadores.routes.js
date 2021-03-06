const express = require('express');
let router = express.Router();
const utilizadorController = require('../controllers/utilizadores.controller');
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
    .get(authController.verifyToken, utilizadorController.findAll)

router.route('/notApproved')
    .get(authController.verifyToken, utilizadorController.findNotApproved);

router.route('/approved')
    .get(authController.verifyToken, utilizadorController.findApproved);

router.route('/:utilizadorID')
    .put(authController.verifyToken, utilizadorController.update)
    .delete(authController.verifyToken, utilizadorController.delete);

router.route('/:utilizadorID/passe')
    .put(authController.verifyToken, authController.isCCAOrLoggedUser, utilizadorController.updatePasse);

router.route('/:utilizadorID/links')
    .put(authController.verifyToken, authController.isCCAOrLoggedUser, utilizadorController.updateLinks);

router.route('/:utilizadorID/estado')
    .put(authController.verifyToken, authController.isCCA, utilizadorController.updateEstado);

router.route('/:utilizadorID/cca')
    .put(authController.verifyToken, authController.isCCA, utilizadorController.updateCCA);

router.all('*', function (req, res) {
    res.status(404).json({ message: 'UTILIZADORES: what???' });
})

// EXPORT ROUTES (required by APP)
module.exports = router;