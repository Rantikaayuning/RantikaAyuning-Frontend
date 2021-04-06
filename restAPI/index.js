const fetch = require('node-fetch');

async function getUsersandPosts() {
    // JSON Object Users
    const users = await fetchDataUsers();
    function fetchDataUsers() { 
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res=> res);
    }

    // JSON Object Posts
    const posts = await fetchDataPosts();
    function fetchDataPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res=> res);
    }

    arrayResult = [], postsObj = [];
    for (let x in users)    
    for (let n in posts){
        if (typeof postsObj[posts[n].id] == 'undefined') {
            arrayResult.push({...posts[n], user : {
                ...users[x]
            }});
        }
    }
    console.log(arrayResult);
} 

getUsersandPosts();
