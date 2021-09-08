import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';
import About from '../components/About';
// import Resume from '../components/Resume';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import Modal from '../components/Modal';

function App() {
  return (
    <Router>
      <Route
        render={routerProps => (
          <Header {...routerProps} />
        )}
      />

      <main className="m-4 h-full tablet:m-8">
        <Switch>
          <Route path="/" exact
            render={routerProps => (
              <Home {...routerProps} />
            )}
          />
          {/* 
            <Route path="/resume" exact
              component={Resume}
            /> */}

          <Route path="/about" exact
            component={About}
          />

          <Route path="/details/:name" exact component={Modal}/>

          <Redirect to="/" />

        </Switch>
      </main>
      <Footer/>
    </Router>
      
  );
}


export default App;
