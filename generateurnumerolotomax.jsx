import React, { useState } from "react";

const LottoMaxGenerator = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  // Fonction pour générer une suite de numéros aléatoires pour le Loto Max
  const generateRandomNumbers = () => {
    const numbers = [];
    while (numbers.length < 7) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setRandomNumbers(numbers);
  };

  // Gérer la génération des numéros aléatoires
  const handleGenerate = () => {
    generateRandomNumbers();
  };

  return (
    <div>
      <h2>Générateur de numéros du Loto Max</h2>
      <button onClick={handleGenerate}>Générer</button>
      <div>
        {randomNumbers.length > 0 && (
          <ul>
            {randomNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LottoMaxGenerator;
