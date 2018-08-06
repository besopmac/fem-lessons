const { name, weapon, room } = {
    'name': 'Rusty',
    'room': 'kitchen',
    'weapon': 'candlestick'
}

// omit certain values
let [a, ,b] = [1, 2, 3];
console.log(a, b);


// combine with spread operator (accumulates the rest of the values)
let [c, ...d] = ['Bruno', 'Barney', 'Cynthia'];

console.log(c, d);
