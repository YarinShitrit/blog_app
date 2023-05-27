const express = require('express')

// express app
const app = express()

//register ejs as view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(8080)

app.get('/', (req, res) => {
    const blogs = [{"title": 1, "snippet": "test1"}]
    res.render('index', {title: 'Home', blogs})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

// redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create blog'})
})

//404 page
app.use((req, res) =>{
    res.render('404', {title: '404'})
})