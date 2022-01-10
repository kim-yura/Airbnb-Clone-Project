// -------------------- IMPORTS -------------------- //

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/spots', spotsRouter);

// -------------------- ROUTES -------------------- //

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// -------------------- EXPORTS -------------------- //

module.exports = router;
