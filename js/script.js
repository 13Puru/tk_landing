const cardContainer = document.querySelector('.card-container');
const cards = cardContainer.querySelectorAll('.card');
let currentIndex = 0;

// Set initial active card
cards[currentIndex].classList.add('active');

function updateCards() {
  // Remove the exiting class from all cards
  cards.forEach((card) => card.classList.remove('exiting'));

  // Mark the current card as exiting
  const currentCard = cards[currentIndex];
  currentCard.classList.remove('active');
  currentCard.classList.add('exiting');

  // Update the index
  currentIndex = (currentIndex + 1) % cards.length;

  // Mark the next card as active
  const nextCard = cards[currentIndex];
  nextCard.classList.add('active');
}

// Change cards every 2 seconds (1-second pause + 1-second transition)
setInterval(updateCards, 2000);