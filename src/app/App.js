import { Component } from 'react';
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

class App extends Component {

  render() {
    return (
      <div className="App m-4">
        <Router>
          <Route
            component = {Header}
          />
          
          <main className="m-8">

            <Switch>
              <Route path="/" exact
                component = {Home}
              />

              <Route path="/resume" exact
                component = {Resume}
              />

              <Route path="/about" exact
                component= {About}
              />
              
              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
