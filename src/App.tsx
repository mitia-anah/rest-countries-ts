import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails'; 
import {GlobalProvider} from './components/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Switch> 
        <Route exact path='/'>
        <Countries/>
        </Route>
        <Route exact path='/:countryName'>
          <CountryDetails/>
        </Route>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
