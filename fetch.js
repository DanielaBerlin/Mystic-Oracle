const btns = document.querySelectorAll('.get-card');
const cardContainers = document.querySelectorAll('.card');
const tarotAPI = 'tarot-images.json';

function getCard(buttonIndex) {
  fetch(tarotAPI)
    .then(response => response.json())
    .then(data => {
      const cards = data.cards;
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
      const imagePath = `cards/${card.img}`;

      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <ul>
          <li>Description: ${data.description}</li>
          <li>Name: ${card.name}</li>
          <li>Number: ${card.number}</li>
          <li>Arcana: ${card.arcana}</li>
          <li>Suit: ${card.suit}</li>
          <li>Image: <img src="${imagePath}" alt="${card.name}" /></li>
          <li>Fortune Telling: ${card.fortune_telling.join(', ')}</li>
          <li>Keywords: ${card.keywords.join(', ')}</li>
          <li>Meanings:</li>
          <ul>
            <li>Light: ${card.meanings.light.join(', ')}</li>
            <li>Shadow: ${card.meanings.shadow.join(', ')}</li>
          </ul>
          <li>Archetype: ${card.Archetype}</li>
          <li>Hebrew Alphabet: ${card['Hebrew Alphabet']}</li>
          <li>Numerology: ${card.Numerology}</li>
          <li>Elemental: ${card.Elemental}</li>
          <li>Mythical/Spiritual: ${card['Mythical/Spiritual']}</li>
          <li>Questions to Ask: ${card['Questions to Ask'].join(', ')}</li>
        </ul>
        <hr>
      `;

      cardContainers[buttonIndex].innerHTML = '';
      cardContainers[buttonIndex].appendChild(cardElement);
    })
    .catch(error => {
      console.log('Error fetching card:', error);
    });
}

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    getCard(index);
  });
});

