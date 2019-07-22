// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the info data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class='card'>
//   <div class='headline'>{Headline of article}</div>
//   <div class='author'>
//     <div class='img-container'>
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = 'https://lambda-times-backend.herokuapp.com/articles';

const cardInfo = () => {
  axios
    .get(cards)
    .then(info => {
      let content = info['data']['articles'];
      let article = 'javascript';

      createCard(content, article);
      article = 'bootstrap';
      createCard(content, article);
      article = 'technology';
      createCard(content, article);
      article = 'jquery';
      createCard(content, article);
      article = 'node.js';
      createCard(content, article);
    })
    .catch(err => {
      console.log('error: ', err);
    });
};

const createCard = (content, article) => {
  const headline = 'headline';
  const author = 'authorName';
  const photo = 'authorPhoto';

  for (i in content[article]) {
    const cardsContainer = document.querySelector('.cards-container');
    const card = document.createElement('div');
    const headlineBox = document.createElement('div');
    const authorBox = document.createElement('div');
    const imgBox = document.createElement('div');
    const newSpan = document.createElement('span');
    const img = document.createElement('img');

    headlineBox.innerText = content[article][i][headline];
    authorBox.innerText = content[article][i][author];
    img.src = content[article][i][photo];

    card.classList.add('card');
    headlineBox.classList.add('headline');
    authorBox.classList.add('author');
    imgBox.classList.add('img-container');

    imgBox.appendChild(img);
    authorBox.appendChild(imgBox);
    authorBox.appendChild(newSpan);
    headlineBox.appendChild(authorBox);
    card.appendChild(headlineBox);
    cardsContainer.appendChild(card);
  }
};

cardInfo();