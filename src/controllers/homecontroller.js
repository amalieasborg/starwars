const express = require('express');
const characters = require('./submitController').characters; // Import the characters array
const app = express();

exports.getHomePage = (req, res) => {
    res.sendFile('C:/Users/Bruger/WebstormProjects/starwars/public/views/homepage.html');
};

// GET /characters: Retrieves all characters
exports.getCharacters = (req, res) => {
    res.json(characters);
};
