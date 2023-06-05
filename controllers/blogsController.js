const Blog = require('../models/blog')

const blogs_index = (req, res) => {
    Blog.find().sort({updatedAt: -1})
    .then((result) => {
        res.render('blogs/index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('blogs/details', {blog: result, title: 'Blog details'});
        })
        .catch((err) => {
            res.status(404).render('404', {title: "Blog not found"})
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'Create a new blog'})
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save().
        then((result) => {
            res.redirect('/blogs')
        }).catch((err) => {
            console.log(err)
        })
}

const blog_update_get = (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => {
            res.render('blogs/update', {blog: blog, title: 'Update blog'})
        })
        .catch((err) => {
            res.status(404).render('404', {title: "Blog not found"})
        })
}

const blog_update = (req, res) => {
    console.log(req.body)
    Blog.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err)
    })
}

const blog_delete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect :'/blogs'})
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    blogs_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_update_get,
    blog_update,
    blog_delete
    
}