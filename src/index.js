const request = require('requests');
const path = require('path');
const express = require('express');
const port = 3000;


const app = express();

// Paths
const publicPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../views');


// Views
app.set('view engine', 'pug');
app.set('views', viewPath);


// Static content
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.render('index', {title: 'currency converter'});
});


app.get('/tools', (req, res) => {
    res.render('tools', {title: 'tools'});
});


app.get('*', (req, res) => {
    res.render('404', {title: 'page not found'});
});


app.listen(3000, () => {
    console.log(`Server listening on ${port}.`);
});
