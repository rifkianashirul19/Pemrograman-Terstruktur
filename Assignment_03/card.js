function sortCards(deck) {
    const suits = ['Sekop', 'Hati', 'Keriting', 'Wajik'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'As'];
    const orderedDeck = [];
  
    // Membuat setumpuk kartu terurut
    for (let suit of suits) {
      for (let rank of ranks) {
        orderedDeck.push(`${rank} ${suit}`);
      }
    }
  
    // Mengurutkan setumpuk yang diberikan sesuai urutan
    const sortedDeck = [];
    for (let card of orderedDeck) {
      if (deck.includes(card)) {
        sortedDeck.push(card);
      }
    }
  
    return sortedDeck;
  }

  const shuffledDeck = [
    '9 Wajik', 'As Hati', '7 Keriting', 'Q Sekop', '5 Keriting', '3 Hati',
    'J Wajik', '8 Keriting', 'K Hati', '4 Wajik', '6 Sekop', '2 Keriting',
    'J Sekop', '10 Hati', 'Q Wajik', '2 Sekop', '7 Wajik', '4 Hati',
    '8 Wajik', '9 Sekop', '3 Wajik', 'K Keriting', '10 Sekop', 'As Sekop',
    '6 Wajik', 'Q Hati', '5 Sekop'
  ];
  
  const sortedDeck = sortCards(shuffledDeck);
console.log(sortedDeck);