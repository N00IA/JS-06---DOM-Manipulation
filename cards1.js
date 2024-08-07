const IMAGE_URL = "https://placehold.co/200";

const users= [
    {
        id: 1,
        user_name: 'ZAB',
        description: 'Me gustan los conejos',
        age: '26',
        fav_music: {
            bands: ['Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'],
        },
    },
    {
        id: 2,
        user_name: 'FRANCHESKA',
        description: 'Amo el chocolate',
        age: '30',
        fav_music: {
            bands: ['Nirvana', 'Radiohead', 'The Cure'],
        },
    },
    {
        id: 3,
        user_name: 'LORENA',
        description: 'Me gustan los tiburones',
        age: '46',
        fav_music: {
            bands: [
                'The Police', 'Alejandro Sanz', 'Barón Rojo', 'Los Beatles'
            ]
        }
    },
    {
        id: 4,
        user_name: 'VICENTE',
        description: 'Dormir es mi pasatiempo favorito',
        age: '23',
        fav_music: {
            bands: [
                'Nek', 'Guns N Roses', 'Metallica', 'Queen'
            ]
        }
    }
];


function createUserCard(user) {

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = IMAGE_URL;
    imageElement.alt = "User profile photo";

    const cardTitleElement = document.createElement('h3');
    cardTitleElement.classList.add('card-title');

    const cardAgeElement = document.createElement('p');
    const cardDescElement = document.createElement('p');

    cardTitleElement.textContent = user.user_name;
    cardAgeElement.textContent = `Age: ${user.age}`;
    cardDescElement.textContent = user.description;

    cardElement.appendChild(imageElement);
    cardElement.appendChild(cardTitleElement);
    cardElement.appendChild(cardAgeElement);
    cardElement.appendChild(cardDescElement);

    return cardElement;
}

function renderUserCards(users) {
    const cardsContainer = document.getElementById('cards-container');
    
    cardsContainer.innerHTML = '';
    
    users.forEach(user => {
        const userCard = createUserCard(user);
        cardsContainer.appendChild(userCard);
    });
}

renderUserCards(users);
console.log("Script cargado correctamente");