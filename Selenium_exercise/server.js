const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const ejs = require('ejs');
const loginRoute = require('./routes/loginRoute');
const productRoute = require('./routes/productRoute');
const carRoute = require('./routes/carRoute');

// Setup the view template using Embedded JavaScript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use('/', loginRoute);
app.use('/', productRoute);
app.use('/', carRoute);


// Default route
app.get('/', (req, res) => {
    const username = req.session.username;
    res.render('login', { username });
});


// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.redirect('/');
        }
        res.redirect('/');
    });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}: localhost:${PORT}`);
});
