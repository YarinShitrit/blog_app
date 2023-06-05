const express = require('express');
const blogsController = require('../controllers/blogsController')

const router = express.Router();

router.get('/', blogsController.blogs_index)
router.post('/', blogsController.blog_create_post)
router.get('/create', blogsController.blog_create_get)
router.get('/:id', blogsController.blog_details)
router.delete('/:id', blogsController.blog_delete)

module.exports = router;