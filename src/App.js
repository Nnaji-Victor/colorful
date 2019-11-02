import React from 'react';
import Palette from './components/Palette';
import SeedColors from './components/SeedColors';
import {generatePalette} from './components/ColorHelper';

function App() {
  console.log(generatePalette(SeedColors[4]));
  return (
    <div className="App">
      <Palette {...SeedColors[6]}/>
    </div>
  );
}

export default App;
