import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [visible, setVisble] = useState(false);
  const handleToggle = () => {
    setVisble(!visible);
  }
  return (
    <div className="App">
      <button onClick={handleToggle}>
        {visible ? 'Hide' : 'Show'} text
      </button>
      {visible && <p>This is TNC, toggled text - playing with toggled text!</p>}
    </div>
  );
}

export default App;
