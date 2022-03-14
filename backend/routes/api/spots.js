const express = require('express');
const asyncHandler = require('express-async-handler');

const csrf = require('csurf');
const csrfProtection = csrf({ cookies: true });

const db = require('../../db/models');
const { response } = require('express');
const { Booking, Review, Spot, User } = db;

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const allSpots = await Spot.findAll({
        include: [
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
            Booking,
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
            Review,
            User
        ]
    });
    return res.json(spot);
}));


router.put('/:id(\\d+)/', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const oldSpot = await Spot.findByPk(spotId);
    const updatedSpot = await oldSpot.update(req.body);
    return res.json(updatedSpot);
}));


router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    await spot.destroy();
    return res.json({ spot });
}));



module.exports = router;
