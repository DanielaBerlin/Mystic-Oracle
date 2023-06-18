const btns = document.querySelectorAll('.get-card');
const cardContainers = document.querySelectorAll('.card');
const tarotAPI = 'tarot-images.json';

function getCard(buttonIndex) {
  fetch(tarotAPI)
    .then((response) => response.json())
    .then((data) => {
      const cards = data.cards;
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
      const imagePath = `cards/${card.img}`;

      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <ul>
          <li><strong>Description:</strong> ${data.description}</li>
          <li><strong>Name:</strong>  ${card.name}</li>
          <li><strong>Number:</strong>  ${card.number}</li>
          <li><strong>Arcana:</strong>  ${card.arcana}</li>
          <li><strong>Suit:</strong>  ${card.suit}</li>
          <li><strong>Image:</strong></li> 
          <li>
          <div class="card-image">
          <img src="${imagePath}" alt="${card.name}" />
          </div>
          </li>
          <li><strong>Fortune Telling:</strong>  ${card.fortune_telling.join(', ')}</li>
          <li><strong>Keywords:</strong>  ${card.keywords.join(', ')}</li>
          <li><strong>Meanings:</strong></li>
          <ul>
            <li><strong>Light:</strong>  ${card.meanings.light.join(', ')}</li>
            <li><strong>Shadow:</strong>  ${card.meanings.shadow.join(', ')}</li>
          </ul>
          <li><strong>Archetype:</strong>  ${card.Archetype}</li>
          <li><strong>Hebrew Alphabet:</strong>  ${card['Hebrew Alphabet']}</li>
          <li><strong>Numerology:</strong>  ${card.Numerology}</li>
          <li><strong>Elemental:</strong>  ${card.Elemental}</li>
          <li><strong>Mythical/Spiritual:</strong>  ${card['Mythical/Spiritual']}</li>
          <li><strong>Questions to Ask:</strong>  ${card['Questions to Ask'].join(', ')}</li>
        </ul>
        <hr>
      `;

      cardContainers[buttonIndex].innerHTML = '';
      cardContainers[buttonIndex].appendChild(cardElement);
    })
    .catch((error) => {
      console.log('Error fetching card:', error);
    });
}

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    getCard(index);
  });
});
