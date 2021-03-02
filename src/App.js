import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import home from './components/pages/home';
import Nav from './components/Nav';

function App() {
  return(
    <>
    <Router>
      <Nav />
      
      <Switch>
          <Route path='/' exact component={home}/>
      </Switch>
    </Router>
  </>
  )
  
 
}

export default App;