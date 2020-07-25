import fetch from 'node-fetch';
let result = [];
const data_controller = {
    
    gettodos: () => {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => result.push(json))
        .catch(err => console.log(err))
    },

    getposts: () => {
        return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => result.push(json))
        .catch(err => console.log(err))
    },

    getusers: () => {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => result.push(json))
        .catch(err => console.log(err))
    },

    getresult: () => {
        console.log(result);
    }
};

module.exports = data_controller;