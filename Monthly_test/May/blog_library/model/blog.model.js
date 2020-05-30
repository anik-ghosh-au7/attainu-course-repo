const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateTitle = [
    (val) => {
        return (/^[A-Za-z\s\.][A-Za-z\s\.]{0,20}$/.test(val))
    },
    'Please provide a valid blog title which should be at max 20 characters long and can contain . and blank spaces !!!'
];

const validateAuthor = [
    (val) => {
        return (/^[A-Za-z][A-Za-z\s]{1,10}$/.test(val))
    },
    'Please provide a valid name, it should start with a letter, can contain spaces in between and at max should be 10 characters long!!!'
];

const validateRating = [
    (val) => {
        return (/[0-9]*\.?[0-9]*/.test(val))
    },
    'Please provide a valid [genre/genres], only characters and spaces are allowed and max length of each genre is 10!!!'
];

const validateComment = [
    (val) => {
        return (/^[A-Za-z][A-Za-z\s\.]{0,100}$/.test(val))
    },
    "Comment can't more than 100 characters and should only contain characters, spaces and dot"
];


const blogSchema = new Schema({

    Blog_Title: {
        type: String,
        required: true,
        validate: validateTitle,
    },
    Author: {
        type: String,
        required: true,
        validate: validateAuthor,
    },
    Genre: {
        type: [String],
    },
    Rating: {
        type: Number,
        required: true,
        validate: validateRating,
    },
    Comment: {
        type: String,
        validate: validateComment,
    },
    Year_of_release: {
        type: Number
    }

});

module.exports = mongoose.model('blog', blogSchema);