// npm init korsi - (node.js er basic setup)- package.json file create hoise -
// erpr npm install express - server bananur jonno 
// xm choltese, majhe diye practice na korle abar vule jabo tai likhe rakhlam.

const express = require("express");
const app = express();

// console.dir(app);

// express helps us to listen incoming request - listen

let port = 3000;
app.listen( port , () =>{
    
    console.log(`app is listening on port ${port}`);
});

// app.use pura app er jonno same time e 1tai response pathay
// app.use((req, res) =>{
//     console.log("request received");

//     // res.send("This is a basic response");

//     // res.send( {
//     //     name:"mikail",
//     //     surname:"mikki"
//     // });

//     let code = " <h1> Fruits <ol> <li>orange</li> <li>Banana</li> </ol> </h1>";
//     res.send(code);
// });

// hopscotch (extension) diyeo check disi. request ashtese.
// http://localhost:3000/home ba / er po anything dileo request receive hoy.



// app.get alada route er jonno alada response dite parbe



app.get("/", (req, res)=>{
    console.log("request received for root");
    res.send("You contacted root path");
});

app.get("/apple", (req, res)=>{
    console.log("request received for apple");
    res.send("You contacted apple path");
});

app.get("/mango", (req, res)=>{
    console.log("request received for mango");
    res.send("You contacted mango path");
});
app.get("/banana", (req, res)=>{
    console.log("request received for banana");
    res.send("You connected to banana path");
});

/* 
previous syntax chilo app.get("*", (req, res)=>{ ... });
update (express 5)-  app.use('/', (req, res) => { ... });
update (express 5) - app.get('/:any*', (req, res) => { ... });
*/

app.get("/:any", (req, res) => {
    console.log("request received for random route");
    res.send("This path does not exist! error 404");
});

// node diye start korle server auto update hoy na
// code update korle server abr restart korte hoy
// nodemon package - auto updates server
// to install: npm install -g nodemon
// version check: nodemon -v
// to start server: nodemon index.js

