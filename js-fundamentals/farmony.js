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


// eFarmony functions exercises
// questions 1 & 2
let AnimalTestUser = function(username) {
    var argsLenght = arguments.length;
    var otherArgs = [];

    if (argsLenght > 1) {
        for (var i=1; i < argsLenght; i++) {
            otherArgs.push(arguments[i]);
        }
    };

    return {
        'username': username,
        'otherArgs': otherArgs
    };
}

let AnimalTest = function(username) {
    return {
        'username': username,
    };
}

// questions 3 & 4
let AnimalCreator = function(username, species, tagline, noises) {
    return {
        'username': username,
        'species': species,
        'tagline': tagline,
        'noises': noises,
        'friends': []
    }
}

// question 5
let addFriend = function(animal, friend) {
    animal.friends.push(friend.username);
}

// question 6
let dog = AnimalCreator('Barney', 'dog', 'through the damn ball, man', ['woof', 'arfarfarf', 'birl']);
let cow = AnimalCreator('Moo', 'cow', 'got milk?', ['mooo', 'chewchewchew']);
let horse = AnimalCreator('Sugarfoot', 'horse', '...', ['glump', 'whirrrr']);

let myFarm = [dog, cow, horse];
addFriend(dog, cow);
addFriend(cow, horse);
console.log(myFarm);

// question 7
let addMatchesArray = function(farm) {
    for (let animal in farm) {
        farm[animal].matches = [];
    }
}
addMatchesArray(myFarm);

// question 8
let giveMatches = function(farm) {
    for (let animal in farm) {
        farm[animal].matches.push(farm[animal].friends[0]);
    }
}
giveMatches(myFarm);
