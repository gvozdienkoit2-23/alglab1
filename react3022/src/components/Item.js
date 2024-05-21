// src/components/Item.js

import React from 'react';

const Item = () => {
  const riddles = [
    {
      id: 1,
      description: "Что можно увидеть с закрытыми глазами?",
      options: ["Мечты", "Сны", "Тьму", "Свет"],
      correct: 1
    },
    {
      id: 2,
      description: "Что можно сломать, даже если оно не гнется?",
      options: ["Сердце", "Слово", "Молчание", "Дерево"],
      correct: 2
    },
    {
      id: 3,
      description: "Что идет, не двигаясь?",
      options: ["Тень", "Молоко", "Дорога", "Воздух"],
      correct: 3
    },
    // Добавьте другие загадки по аналогии, если нужно
  ];

  return (
    <div>
      {/* Используем метод map для формирования компонента для каждой загадки */}
      {riddles.map(riddle => (
        <div key={riddle.id} style={{ marginBottom: '20px' }}>
          <h3>Загадка {riddle.id}:</h3>
          <p>{riddle.description}</p>
          {/* Вывод вариантов ответов */}
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {riddle.options.map((option, index) => (
              <li key={index}>
                <input type="radio" id={`option${index}`} name={`riddle${riddle.id}`} value={index} />
                <label htmlFor={`option${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Item;
