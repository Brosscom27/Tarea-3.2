import React, { useState } from 'react';
import './App.css';

function App() {
  const [card, setCard] = useState(null);

  const fetchPokemonCard = async () => {
    try {
      const response = await fetch('https://api.pokemontcg.io/v2/cards?q=set.name:base');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.data.length);
      setCard(data.data[randomIndex]);
    } catch (error) {
      console.error('Error al cargar la carta: ', error);
    }
  };

  return (
    <div className="App bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Visualizacion de la tarjeta Pokemon</h1>
        <button
          onClick={fetchPokemonCard}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Nueva carta
        </button>
        {card && (
          <div className="mt-8 p-5 bg-white rounded-lg shadow-lg text-black">
            <h2 className="text-2xl font-bold">{card.name}</h2>
            <img src={card.images.large} alt={card.name} className="max-w-xs rounded-lg mt-4" />
            <p className="text-lg"><strong>Tipo:</strong> {card.types.join(', ')}</p>
            <p className="text-lg"><strong>Serie:</strong> {card.set.name}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
