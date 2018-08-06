// following objects exercises
let animal = {}

animal.username = 'Barney';
animal['tagline'] = 'trough the ball, man!';
animal['noises'] = []; 


// following arrays exercises (part 1)
let noiseArray = ['woooof'];

noiseArray.unshift('ping');
noiseArray.push('pong');
noiseArray[3] = 'bang';

animal.noises = noiseArray;


// following arrays exercises (part 2)
let animals = [];

animals[0] = animal;

let ducks = {
        'username': 'DaffyDuck',
        'tagline': 'Yippeee!',
        'noises': ['quack', 'honk', 'sneeze', 'growl']
    },
    cats = {
        'username': 'Hello Kitty',
        'tagline': '...',
        'noises': ['mmm', 'hunf', 'shhh', 'ugh']
    },
    cartoons = {
        'username': 'El Cabong',
        'tagline': 'Last exit to the right!',
        'noises': ['pow', 'cof', 'boooom', 'clang']
    }

animals.push(ducks, cats, cartoons);

console.log('Animals length:', animals.length);
