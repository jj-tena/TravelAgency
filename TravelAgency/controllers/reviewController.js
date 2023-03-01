import { Review } from "../models/Review.js";

const saveReview = async (req, res) => {
    const {name, email, content} = req.body;
    const errors = [];
    if(name.trim()===''){
        errors.push('El nombre está vacío');
    }
    if(email.trim()===''){
        errors.push('El correo está vacío');
    }
    if(content.trim()===''){
        errors.push('La valoración está vacía');
    }
    if(errors.length>0){
        const reviews = await Review.findAll();
        res.render('reviews', {
            page: 'Valoraciones',
            errors,
            name,
            email,
            content,
            reviews
        })
    } else {
        try {
            await Review.create({
                name,
                email,
                content
            });
            res.redirect('/reviews');
        } catch(error) {
            console.log(error);
        }
    }
}

export {saveReview}