const express = require('express');
let router = express.Router();
const authController = require("../controllers/auth.controller");

router.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => { //finish event is emitted once the response is sent to the client
        const diffSeconds = (Date.now() - start) / 1000; //figure out how many seconds elapsed
        console.log(`${req.method} ${req.originalUrl} completed in ${diffSeconds} seconds`);
    });
    next()
})

router.route('/signup')
    .post(authController.signup);

router.route('/signin')
    .post(authController.signin);

router.route('/verify')
    .get(authController.verifyToken, authController.verifySession);

router.all('*', function (req, res) {
    res.status(404).json({ message: 'AUTH: what???' });
})

// EXPORT ROUTES (required by APP)
module.exports = router;