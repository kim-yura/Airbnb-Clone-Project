const express = require('express');
const asyncHandler = require('express-async-handler');

const csrf = require('csurf');
const csrfProtection = csrf({ cookies: true });

const db = require('../../db/models');
const { response } = require('express');
const { Booking, Spot, User } = db;

const router = express.Router();

router.post('/new', asyncHandler(async (req, res) => {
    const newBooking = req.body;

    const {
        userId,
        spotId,
        startDate,
        endDate,
        reasonForStay
    } = req.body;

    await Booking.create(newBooking);
    return res.json({ newBooking });
}));

router.get('/:id(\\d+)/edit', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const booking = await Booking.findByPk(bookingId);
    return res.json(booking);
}));

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const oldBooking = await Booking.findByPk(bookingId);
    const updatedBooking = await oldSpot.update(req.body);
    return res.json(updatedBooking);
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const booking = await Booking.findByPk(bookingId);
    await booking.destroy();
    return res.json({ booking });
}));


module.exports = router;
