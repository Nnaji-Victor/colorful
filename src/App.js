import React from 'react';
import Palette from './components/Palette';
import SeedColors from './components/SeedColors';
import {generatePalette} from './components/ColorHelper';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Hello Palette</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>Hello individual Palette</h1>}/>
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(SeedColors[4])}/>
    // </div>
  );
}

export default App;
