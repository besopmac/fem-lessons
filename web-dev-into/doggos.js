const dog_url = 'https://dog.ceo/api/breeds/image/random';
const doggos = document.querySelector('.doggos');

function addNewDoggo() {
    const promise = fetch(dog_url);
    
    promise
        .then(function(response) {
            const processingPromise = response.json();
            
            const img = document.createElement('img');
            img.alt = 'Loading...';
            img.src = 'load.gif';
            
            doggos.appendChild(img);

            
            return processingPromise;
        })
        .then(function(processedResponse) {
            img = document.querySelector('img');
            img.src = processedResponse.message;
            img.alt = 'Cute doggo';

            doggos.appendChild(img);

            console.log(img);
        });
}

document.querySelector('.add-doggo').addEventListener('click', addNewDoggo);
