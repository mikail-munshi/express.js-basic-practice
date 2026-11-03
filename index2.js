const express = require("express");
const app = express();

// console.dir(app);

// express helps us to listen incoming request - listen

let port = 3000;
app.listen( port , () =>{
    
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res)=>{
    console.log("request received for root");
    res.send("You contacted root path");
});


// app.get("/:username/:id", (req, res)=>{
//     console.log("received request for username and id");
//     res.send("Hello I am Mikki");
// });

// passing parameters
app.get("/:username/:id", (req, res)=>{
    let {username,id} = req.params;
    console.log("received request for username and id");
    res.send(`Welcome back, ${username}!`);
});

// app.get("/:user", (req, res)=>{
//     console.log("received request for user");
//     let {user} = req.params;
//     let htmlStr = `<h1> Welcome back, @${user}!<h1>`;
//     res.send(htmlStr);
// });

// app.get("/search", (req, res) =>{
//     console.log(req.query);
//     res.send("no results");
// });

/*
request http://localhost:3000/search?q=apple&color=green
response { q: 'apple', color: 'green' }
*/

app.get("/search", (req, res) =>{
    let {q} = req.query;
    if(!q){
        res.send("<h1> Nothing searched</h1>");
    }
    console.log(`received request for query ${q}`)
    res.send(`search results for query: ${q}`);
});

