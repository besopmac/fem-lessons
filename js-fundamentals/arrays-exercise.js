/* 
 * create a variable called noiseArray and assign it to
 * an array literal; place at least one element in the array.
 */

let noiseArray = ['ping'];

/* 
 * add a noise to the beginning of the noiseArray.
 * add another noise to the end of the noiseArray.
 * using bracket notation, add another noise to the end.
 */

noiseArray.unshift('buzz');
noiseArray.push('fizz');
noiseArray[2] = 'pong';

/* 
 * 1. what is the length?
 * 2. what is the last index? How is it different than the length?
 * 3. inspect your handiwork! What does it look like?
 */

 console.log(noiseArray.length);
 console.log(noiseArray.lastIndexOf("pong"));