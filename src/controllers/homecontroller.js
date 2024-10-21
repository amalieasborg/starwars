const express = require('express');
const app = express();

exports.getHomePage = (req, res) => {
    res.sendFile('C:/Users/Bruger/WebstormProjects/starwars/public/views/homepage.html');
};

//Array til at opbevare karakterer midlertidigt på serveren
const characters=[];

//GET /characters: Henter alle karakterer.
app.get('/characters',(req,res)=>{
    res.json(characters);
});