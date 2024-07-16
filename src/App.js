import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill('')));
  const [clicks, setClicks] = useState([]);

  const handleBoxClick = (rowIndex, colIndex) => {
    if (clicks.length === 8) {
      const newMatrix = matrix.map((row, i) =>
        row.map((col, j) => (clicks.some(click => click[0] === i && click[1] === j) ? 'orange' : col))
      );
      setMatrix(newMatrix);
    } else {
      const newMatrix = matrix.map((row, i) =>
        row.map((col, j) => (i === rowIndex && j === colIndex ? 'green' : col))
      );
      setMatrix(newMatrix);
      setClicks([...clicks, [rowIndex, colIndex]]);
    }
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((col, colIndex) => (
            <div
              key={colIndex}
              className="box"
              style={{ backgroundColor: matrix[rowIndex][colIndex] }}
              onClick={() => handleBoxClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
