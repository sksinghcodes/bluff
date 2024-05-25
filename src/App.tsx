import './App.css';
import Card from './components/Card';

function App() {
  const types = ['SPADES', 'CLUBS', 'DIAMONDS', 'HEARTS'];
  const numRange = { min: 1, max: 13 };

  const cards: any = (() => {
    const arr: any = [];
    types.forEach((type) => {
      for (let i = numRange.min; i <= numRange.max; i++) {
        arr.push({
          type,
          number: i
        });
      }
    });
    return arr;
  })();

  return cards.map((card: any) => (
    <Card
      key={card.number + card.type}
      name={`${card.type}_${String(card.number).padStart(2, '0')}`}
    />
  ));
}

export default App;
