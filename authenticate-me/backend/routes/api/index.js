// -------------------- IMPORTS -------------------- //

const router = require('express').Router();

// -------------------- ROUTES -------------------- //

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// -------------------- EXPORTS -------------------- //

module.exports = router;
