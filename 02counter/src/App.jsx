import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <h1>Counter App (0 - 20)</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>

      <button onClick={removeValue}>Decrease Value</button>
    </div>
  );
}

export default App;