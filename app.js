const express = require('express');
const morgan = require('morgan');
const app = express();

// register view engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('running')
})

// middleware static file
app.use(express.static('public'));
// middleware logger info
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'dupa', snippet: 'bla bla bla'},
        {title: 'kamieni', snippet: 'ho ho ho'},
        {title: 'kupa', snippet: 'tik tak tok'},
    ]
    res.render('index', { title: 'Home', blogs} );
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
})

// redirect 
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'Home'});
})