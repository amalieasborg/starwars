const express = require('express');
const app = express();

exports.submitData = (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received',
        data: data
    });
};

//Array til at opbevare karakterer midlertidigt på serveren
const characters=[];

//POST /character: Tilføjer en ny karakter.
exports.submitCharacter=(req, res) => {
    const character = {name:req.body.name, description:req.body.description};
    if (!character.name || typeof character.name !== 'string' ||
        !character.description || typeof character.description !== 'string') {
        return res.status(400).json({ message: 'Invalid character name or description' });
    }
    characters.push(character);
    res.status(201).json(character);
};

//PUT /characters/:index: Opdaterer en eksisterende karakter baseret på det givne indeks.
app.put('/characters/:index',(req,res)=>{
    const index=req.params.index;
    const updateCharacter=req.body;
    if(characters[index]){
        characters[index]=updateCharacter;
        res.json({message:'Character updated successfully.',characters});
    }else{
        res.status(404).json({message:'Character was not found'});
    }
});

//DELETE /characters/:index: Sletter en karakter baseret på det givne indeks.
app.delete('/characters/:index',(req,res)=>{
    const index=req.params.index;
    if (characters[index]){
        characters.splice(index,1);
        res.json({message: 'Characters deleted successfully.',characters});
    }else{
        res.status(404).json({message: 'Character not found'});
    }
});

exports.characters = characters;
