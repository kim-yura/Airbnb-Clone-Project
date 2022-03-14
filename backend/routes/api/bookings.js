const express = require('express');
const asyncHandler = require('express-async-handler');

const csrf = require('csurf');
const csrfProtection = csrf({ cookies: true });

const db = require('../../db/models');
const { response } = require('express');
const { Booking, Spot, User } = db;

const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spotBookings = await Booking.findBy
}))
