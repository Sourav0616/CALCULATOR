import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-96 h-96 flex flex-col">
        <div className="mb-4 p-4 bg-gray-200 text-right text-3xl font-mono rounded-lg flex-1">
          {input}
        </div>
        <div className="grid grid-cols-4 gap-3 flex-2">
          {['7', '8', '9', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              {value}
            </button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              {value}
            </button>
          ))}
          <button
            onClick={() => handleClick('C')}
            className="col-span-4 p-4 bg-red-600 text-white rounded-lg hover:bg-red-800"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
