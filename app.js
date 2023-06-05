const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogsRoute')

// express app
const app = express()

// connect to MongoDB
const dbURI = 'mongodb+srv://admin:admin@blogs.n0nzihu.mongodb.net/db?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => app.listen(8080))
    .catch((err) => console.log(err))

// register ejs as view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}))
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

app.get('/', (req, res) => {   
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

// blogs routes
app.use('/blogs', blogRoutes)


// 404 page
app.use((req, res) =>{
    res.render('404', {title: '404'})
})