const Blog = require('../model/blog.model');


// Greater rating will come first and then lower value of Blog_Title string
function sort_data (key1, key2) {
    return function(a, b) {
        if (a[key1] > b [key1]) {
            return -1;
        } else if (a[key1] < b [key1]) {
            return 1;
        } else {
            if (a[key2] > b [key2]) {
                return 1;
            }
            else {
                return -1;
            }
        }
    }
}

// adding new blog
exports.add = (req, res) => {
    let entry = new Blog({
        Blog_Title: req.body.Blog_Title,
        Author: req.body.Author,
        Genre: req.body.Genre,
        Rating: req.body.Rating,
        Comment: req.body.Comment,
        Year_of_release: req.body.Year_of_release
    });

    entry.save(function (err) {

            if (err) {
                // not acceptable
                res.status(406).send(err.message);
            } else {
                // created
                res.status(201).send('Blog created successfully');
            }
    });
};

// get all blogs
exports.getall = (req, res) => {
    // hiding _id field
    // Blog.find({}, {_id: 0}, (err, data) => { 
    Blog.find((err, data) => {
        if (err) {
            // Internal server error
            res.status(500).send({msg: "Internal Server Error"});
        } else {
            // OK
            if (data.length !== 0) {
                // ok
                res.status(200).send(data)
            }
            else {
                // no data
                res.status(204).send(data);
            }
        };
    });
};

// update blog according to mongoose id
exports.update = (req, res) => {
    let id = req.params.id;
    let query = Blog.find({_id: id});

    if (req.body.Blog_Title) query.updateOne({_id: id}, { $set: { Blog_Title: req.body.Blog_Title } });
    if (req.body.Author) query.updateOne({_id: id}, { $set: { Author: req.body.Author } });
    if (req.body.Genre) query.updateOne({_id: id}, { $set: { Genre: req.body.Genre } });
    if (req.body.Rating) query.updateOne({_id: id}, { $set: { Rating: req.body.Rating } });
    if (req.body.Comment) query.updateOne({_id: id}, { $set: { Comment: req.body.Comment } });
    if (req.body.Year_of_release) query.updateOne({_id: id}, { $set: { Year_of_release: req.body.Year_of_release } });

    query.exec((err, result) => {
        if (err) {
            // internal server error
            res.status(500).send(err)
        } else {
            if (result.nModified > 0) {
            // ok
            res.status(200).send({msg: 'Update Successfull'});
            } else {
                // Bad request
                res.status(400).send({msg: 'Update Failed!!!'});
            };
        };
    });
};

// Delete blog according to mongoose id
exports.delete = (req, res) => {
    let id = req.params.id;
    Blog.deleteOne({ _id: id }, function (err) {
        // bad request
        if(err) res.status(400).send('Invalid id')
        // ok, successfully deleted
        else res.status(200).send({msg: 'Blog deleted successfully'});
    });
};

// get all blogs by Blog_Title
exports.get_by_name = (req, res) => {
    let name = req.params.name;
    Blog.find({Blog_Title: name}, (err, data) => {
        if (err) {
            // Internal server error
            res.status(500).send({msg: "Internal Server Error"});
        } else {
            // OK
            if (data.length !== 0) {
                // ok
                res.status(200).send(data.sort(sort_data("Rating", "Blog_Title")))
            }
            else {
                // no data
                res.status(204).send(data);
            }
        };
    });
};

// get all blogs by Author
exports.get_by_author = (req, res) => {
    let name = req.params.name;
    console.log(name);
    Blog.find({Author: name}, (err, data) => {
        if (err) {
            // Internal server error
            res.status(500).send({msg: "Internal Server Error"});
        } else {
            // OK
            if (data.length !== 0) {
                // ok
                res.status(200).send(data.sort(sort_data("Rating", "Blog_Title")))
            }
            else {
                // no data
                res.status(204).send(data);
            }
        };
    });
};
    

