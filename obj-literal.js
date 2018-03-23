/*
    Create an object using bracket and dot notation that represents
    the characters and related data you my find in a Game of Clue
*/

var game = {};

game.murderer = "?";
game['weapons'] = [
    {   
        type: 'laser',
        location: 'lab'
    },
    {   type: 'atomic gun',
        location: 'lab'
    },
    {   type: 'rock',
        location: 'forrest'
    }
]; 

game.name = [];
game.name.push('Miss Scarlet'); // I'd it right on first attempt!
game.name[0] = ['Mr. Crowley']; // There is another way to make this...
