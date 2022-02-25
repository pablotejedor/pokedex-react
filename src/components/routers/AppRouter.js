import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {AboutScreen } from '../Screens/AboutScreen';
import { PokedexScreen } from '../Screens/PokedexScreen';
import { SearchScreen } from '../Screens/SearchScreen';
import NavBar from '../ui/NavBar';

export const AppRouter = () => {
  return (
    <Router>
        <NavBar className='navbar'/>
        <Switch>
          <Route exact path="/" component={PokedexScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/" />
        </Switch>
    </Router>
  );
};
