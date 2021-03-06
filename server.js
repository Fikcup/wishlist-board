const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');

const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// public directory
app.use(express.static('public'));

// set the handlebars engine
app.engine('.handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

// tell the app what folder our views is going to be in  
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, '/views'));

// set favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(routes);

db.once('open', () => {
    console.log('Successfully connected to the database.');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});