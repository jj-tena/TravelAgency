import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('landing', {
        pagina: 'Inicio'
    });
})

router.get('/us', (req, res) => {
    res.render('us', {
        pagina: 'Nosotros'
    });
})

router.get('/travels', (req, res) => {
    res.render('travels', {
        pagina: 'Viajes'
    });
})

router.get('/reviews', (req, res) => {
    res.render('reviews', {
        pagina: 'Valoraciones'
    });
})

export default router;