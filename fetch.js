const btn = document.querySelector('.get-cards');
btn.addEventListener('click', getCards);
const number = document.getElementById('number');
const URL = 'tarot-images.json';

function getCards(e) {
  e.preventDefault();

  if (number.value.length == 0) {
    return alert('Please enter a number');
  } else {
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.cards = shuffle(data.cards);
        let output = '';

        for (let i = 0; i < number.value; i++) {
          // if(i == number.value) {break;}
          const card = data.cards[i];
          const imagePath = `cards/${card.img}`;

          output += `
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
        }

        document.querySelector('.cards').innerHTML = output;
      });
  }
}
// Shuffle function
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
