// create a variable, name it animal, and assign it an object literal
let animal = {},
    noises = [];


/*
 *  with dot notation...
 *  1. add a property called username and assign it a value.
 *  2. ensure that your username property exists in animal by inspecting.
 */

animal.username = 'Barney';
console.log(animal.username);


/*
 *  with bracket notation...
 *  1. add a property called tagline and give it a value.
 *  2. ensure that your username property exists in animal by inspecting.
 *  3. create a variable called noises and assign it an empty array []
 *  4. add the noises array to your object.
 *  5. inspect your handiwork! Your object should look something like this
 */

animal['tagline'] = 'trough the ball, man!';
console.log(animal.tagline);

animal['noises'] = noises;
console.log(animal);


/*
 *  loops...
 *  1. loop through the properties of your animal object.
 *  2. count everytime it loops to keep track of the number of properties on your object.
 *  3. if the key is username, fill in with object's username value.
 *  4. if the key is tagline, fill in with object's tagline value.
 */
var count = 0;
for (var key in animal) {
    count++;
    if (key === 'username') {
        console.log('Hi, my name is ' + animal[key]);
    } else if (key === 'tagline') {
        console.log('I like to say: ' + animal[key]);
    }
}
