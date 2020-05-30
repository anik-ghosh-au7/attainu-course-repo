var express = require('express');
var router = express.Router();
var blogController = require('../controller/blog.controller');


// redirecting to index
router.get('/', function(req, res, next) {
  // No content 
  res.status(204).redirect('/');
});

// add new blog
router.post('/add', blogController.add);

// get all blogs
router.get('/all', blogController.getall);

// update a blog according to mongoose id passed in params
router.put('/update/:id', blogController.update);

// delete a blog according to mongoose id passed in params
router.delete('/delete/:id', blogController.delete);

// get all blogs according Blog_Title sorted based Rating and Blog_Title 
router.get('/gettitle/:name', blogController.get_by_name);

// get all blogs according Author sorted based Rating and Blog_Title 
router.get('/getauthor/:name', blogController.get_by_author);

module.exports = router;
