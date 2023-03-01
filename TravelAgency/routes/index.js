import express from "express";
import { 
    landingPage, 
    usPage, 
    travelsPage, 
    reviewsPage, 
    travelDetailsPage
} from "../controllers/pageController.js";
import {saveReview} from "../controllers/reviewController.js"

const router = express.Router();

router.get('/', landingPage)

router.get('/us', usPage)

router.get('/travels', travelsPage)

router.get('/travels/:slug', travelDetailsPage)

router.get('/reviews', reviewsPage)

router.post('/reviews', saveReview)

export default router;