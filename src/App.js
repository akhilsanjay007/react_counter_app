import React, { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0); // State for counter

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter App</h1>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setCount(count + 1)}>➕ ADD</button>
        <button onClick={() => setCount(count - 1)}>➖ REMOVE</button>
        <button onClick={() => setCount(count * 2)}>X2</button>
        <button onClick={() => setCount(count / 2)}>/2</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default App;
