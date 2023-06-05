const express = require('express');
const blogsController = require('../controllers/blogsController')

const router = express.Router();

router.get('/', blogsController.blogs_index)
router.post('/', blogsController.blog_create_post)
router.post('/update/:id', blogsController.blog_update)
router.get('/create', blogsController.blog_create_get)
router.get('/:id', blogsController.blog_details)
router.get('/update/:id', blogsController.blog_update_get)
router.delete('/:id', blogsController.blog_delete)

module.exports = router;