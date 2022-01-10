const express = require('express');
const asyncHandler = require('express-async-handler');

const db = require('../../db/models');
const { Bookings, Images, Reviews, Spots, Users } = db;

const router = express.Router();



router.get('/', asyncHandler(async (req, res) => {
    const allSpots = await Spots.findAll({
        include: [
            Images,
            Reviews,
            Users
        ]
    });
    return res.json(allSpots);
}));



module.exports = router;
