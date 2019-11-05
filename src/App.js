import React from 'react';
import Palette from './components/Palette';
import SeedColors from './components/SeedColors';
import {generatePalette} from './components/ColorHelper';
import {Route, Switch} from 'react-router-dom';

const findPalette = (id) => SeedColors.find( palette => palette.id === id);

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Hello Palette</h1>} />
  <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}/>
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(SeedColors[4])}/>
    // <Palette palette={generatePalette(findPalette)}
    // </div>
  );
}

export default App;
