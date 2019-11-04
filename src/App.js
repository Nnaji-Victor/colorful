import React from 'react';
import Palette from './components/Palette';
import SeedColors from './components/SeedColors';
import {generatePalette} from './components/ColorHelper';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(SeedColors[1])}/>
    </div>
  );
}

export default App;
