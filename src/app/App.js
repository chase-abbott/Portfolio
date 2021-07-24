import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';
import About from '../components/About';
import Resume from '../components/Resume';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Route
          component={Header}
        />

        <main className="m-4 tablet:m-8">

          <Switch>
            <Route path="/" exact
              component={Home}
            />

            <Route path="/resume" exact
              component={Resume}
            />

            <Route path="/about" exact
              component={About}
            />

            <Redirect to="/" />

          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
