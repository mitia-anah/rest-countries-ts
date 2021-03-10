import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails'; 
import Form from './components/Form';
import {GlobalProvider} from './components/GlobalState'
import Header from './components/Header';


function App() {
  return (
    <GlobalProvider>
     <Header />
     <Form/>
      <Switch> 
        <Route exact path='/'>
        <Countries/>
        </Route>
        <Route exact path='/country/:name'>
          <CountryDetails/>
        </Route>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
