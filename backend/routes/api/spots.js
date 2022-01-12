const express = require('express');
const asyncHandler = require('express-async-handler');

const csrf = require('csurf');
const csrfProtection = csrf({ cookies: true });

const db = require('../../db/models');
const { response } = require('express');
const { Booking, Image, Review, Spot, User } = db;

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const allSpots = await Spot.findAll({
        include: [
            Image,
            Review,
            User
        ]
    });
    return res.json(allSpots);
}));


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId, {
        include: [
            Image,
            Review,
            User
        ]
    });
    return res.json(spot);
}));


router.post('/new', asyncHandler(async (req, res) => {
    const newSpot = req.body;

    const {
        userId,
        address,
        city,
        state,
        country,
        zipcode,
        name,
        price,
        description
    } = req.body;

    await Spot.create(newSpot);
    return res.json({ newSpot });
}));


router.get('/:id(\\d+)/edit', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId, {
        include: [
            Image,
            Review,
            User
        ]
    });
    return res.json(spot);
}));


router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const updatedSpot = req.body;
    const spot = await Spot.findByPk(spotId, {
        include: [
            Image,
            Review,
            User
        ]
    });
    await spot.put(updatedSpot);
    return res.json({ updatedSpot });
}));


router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    await spot.destroy();
    return res.json({ spot });
}));



module.exports = router;
