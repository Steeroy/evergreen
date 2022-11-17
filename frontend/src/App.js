import './App.css';
import NavBar from './components/NavBar';
import Home from './screens/Home/Home';

import { useState } from 'react';

function App() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 2) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className="App">
      <header className={color ? 'onScroll fixed-top' : 'fixed-top'}>
        <NavBar />
      </header>

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
