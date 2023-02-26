import express from "express";

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.get('/us', (req, res) => {
    res.send('Hola nosotros');
})

app.get('/contact', (req, res) => {
    res.send('Hola contacto');
})

app.listen(port, () => {
    console.log(`Servidor funcionando en puerto ${port}`)
})