const express = require('express');
const router = express.Router();

// Route to render the login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Route to handle login form submission
router.post('/', (req, res) => {
    // Login logic
    const username = 'user'; // Hardcoded username (for testing)
    const password = 'pass'; // Hardcoded password (for testing)

    // Check if provided credentials match
    if (req.body.username === username && req.body.password === password) {
        // Set session variable to indicate the user is logged in
        req.session.username = username;
        res.redirect('/Products'); // Redirect to choose-car page after successful login
    } else {
        res.status(200).send('<p class="error-message">Invalid credentials</p>');
    }
});

module.exports = router;
