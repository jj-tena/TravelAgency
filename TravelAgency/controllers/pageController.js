import { Travel } from '../models/Travel.js' 

const landingPage = (req, res) => {
    res.render('landing', {
        page: 'Inicio'
    })
}

const usPage = (req, res) => {
    res.render('us', {
        page: 'Nosotros'
    })
}

const travelsPage = async (req, res) => {
    const travels = await Travel.findAll();
    console.log(travels);
    res.render('travels', {
        page: 'Próximos viajes',
        result: travels
    })
}

const travelDetailsPage = async (req, res) => {
    const {slug} = req.params;
    try {
        const travel = await Travel.findOne({
            where: {
                slug: slug
            }
        });
        res.render('travel', {
            page: 'Información del viaje',
            travel: travel
        })
    } catch (error) {
        console.log(error);
    }
    
}

const reviewsPage = (req, res) => {
    res.render('reviews', {
        page: 'Valoraciones'
    })
}



export {
    landingPage, usPage, travelsPage, travelDetailsPage, reviewsPage
}