const express = require('express');
const router = express.Router();

// Define a POST route to handle car selection
router.post('/selectCar', (req, res) => {
    // Extract car make, model, and year from the request body
    const { make, model, year } = req.body;
    res.render('selectedCar', { make, model, year });
});
module.exports = router;
