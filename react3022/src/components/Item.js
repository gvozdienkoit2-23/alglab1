import React, { useState } from 'react';

const Item = () => {
  const [riddles, setRiddles] = useState([
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
    }
  ]);

  const [newRiddle, setNewRiddle] = useState({
    description: '',
    options: ['', '', '', ''],
    correct: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRiddle({ ...newRiddle, [name]: value });
  };

  const handleOptionChange = (e, index) => {
    const options = [...newRiddle.options];
    options[index] = e.target.value;
    setNewRiddle({ ...newRiddle, options });
  };

  const handleAddRiddle = () => {
    setRiddles([...riddles, { ...newRiddle, id: riddles.length + 1 }]);
    setNewRiddle({ description: '', options: ['', '', '', ''], correct: 0 });
  };

  return (
    <div>
      {riddles.map((riddle) => (
        <div key={riddle.id} style={{ marginBottom: '20px' }}>
          <h3>Загадка {riddle.id}:</h3>
          <p>{riddle.description}</p>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {riddle.options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name={`riddle${riddle.id}`}
                  value={index}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      <div style={{ marginTop: '20px' }}>
        <h3>Добавить новую загадку:</h3>
        <input
          type="text"
          name="description"
          placeholder="Описание загадки"
          value={newRiddle.description}
          onChange={handleInputChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        {newRiddle.options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Вариант ответа ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(e, index)}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        ))}
        <input
          type="number"
          name="correct"
          placeholder="Номер правильного ответа"
          value={newRiddle.correct}
          onChange={handleInputChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <button onClick={handleAddRiddle}>Добавить загадку</button>
      </div>
    </div>
  );
};

export default Item;
