/* 
 * create an object using bracket and dot notation that represents
 * the characters and related data you my find in a Game of Clue 
 */

let game = {};

game.murderer = '?';
game.weapons = [
    {   
        'location': 'lab',
        'type': 'laser'
    },
    {
        'location': 'lab',
        'type': 'atomic gun'
    },
    {
        'location': 'forrest',
        'type': 'rock'
    }
]; 

game.name = [];

// i'd it right on first attempt!
game.name.push('Miss Scarlet'); 

/*
 * there is another way to make this...
 * game.name[0] = 'Mr. Crowley';
 */ 
