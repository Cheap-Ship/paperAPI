require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.status(200).json({ message: 'home -- paper api' });
});

app.use('/estados', require('./routes/estados.routes.js'))
app.use('/utilizadores', require('./routes/utilizadores.routes.js'))
app.use('/tipo_utilizadores', require('./routes/tipo_utilizadores.routes.js'))
app.use('/tipo_propostas', require('./routes/tipo_propostas.routes.js'))
app.use('/temas', require('./routes/temas.routes.js'))
app.use('/agenda', require('./routes/agenda.routes.js'))
app.use('/empresas', require('./routes/empresas.routes.js'))
app.use('/estagios', require('./routes/estagios.routes.js'))
app.use('/inscricoes', require('./routes/inscricoes.routes.js'))
app.use('/notificacoes', require('./routes/notificacoes.routes.js'))
app.use('/propostas', require('./routes/propostas.routes.js'))
app.use('/auth', require('./routes/auth.routes.js'))

app.get('*', function (req, res) {
res.status(404).json({ message: 'WHAT???' });
})
app.listen(port, () => console.log(`App listening on PORT ${port}/`));