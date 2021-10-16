const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// set the handlebars engine
app.engine('.handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

// tell the app what folder our views is going to be in  
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// test route for the root route
app.get("/", function(req, res) {
    res.render("all-wishes")
});

app.use(routes);

db.once('open', () => {
    console.log('Successfully connected to the database.');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});