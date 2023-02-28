import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

app.use((req, res, next) => {
    res.locals.year = new Date().getFullYear();
    res.locals.webName = 'Agencia de Viajes';
    return next();
})

app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening in port ${port}`)
})