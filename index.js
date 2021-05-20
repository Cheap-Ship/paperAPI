require('dotenv').config(); // read environment variables from .env file
const express = require('express');
const cors = require('cors'); // middleware to enable CORS (Cross-Origin Resource Sharing)
const app = express();
const port = process.env.PORT || 8080; // if not defined, use port 8080
const host = process.env.HOST || '127.0.0.1'; // if not defined, localhost
app.use(cors()); //enable ALL CORS requests (client requests from other domain)
app.use(express.json()); //enable parsing JSON body data

// root route -- /api/
app.get('/', function (req, res) {
    res.status(200).json({ message: 'home -- paper api' });
});

app.use('/estados', require('./routes/estados.routes.js'))

app.use('/utilizadores', require('./routes/utilizadores.routes.js'))

app.use('/tipo_utilizadores', require('./routes/tipo_utilizadores.routes.js'))

app.use('/tipo_propostas', require('./routes/tipo_propostas.routes.js'))

// handle invalid routes
app.get('*', function (req, res) {
res.status(404).json({ message: 'WHAT???' });
})
app.listen(port, host, () => console.log(`App listening at http://${host}:${port}/`));