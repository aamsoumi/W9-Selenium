const express = require('express');
const router = express.Router();
const fs = require('fs');

const isLoggedIn = (req, res, next) => {
    // Check authentication logic
    if (req.session && req.session.username) {
        next(); // User is authenticated, proceed to the next middleware/route handler
    } else {
        res.redirect('/'); // Redirect to login page if not authenticated
    }
};

// Route to render the Products page
router.get('/Products', isLoggedIn, (req, res) => {
    const username = req.session.username; // Retrieve user data
    res.render('Products', { username });
});

// Route to fetch all car data
router.get('/fetchAllData', isLoggedIn, (req, res) => {
    // Read car data from JSON file
    fs.readFile('models/cars.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500); // Internal Server Error
        }
        let carData = JSON.parse(data); // Parse JSON data
        return res.json(carData);
    });
});

module.exports = router;
