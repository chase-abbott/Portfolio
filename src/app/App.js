import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../components/home/home/Home';
import About from '../components/home/about/About';
import Resume from '../components/home/resume/Resume';
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
      <div className="App">
        <Router>
          <Header/>
          <main className="m-8">

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />
              <Route path="/resume" exact={true}
                render={routerProps => (
                  <Resume {...routerProps}/>
                )}
              />

              <Route path="/about" exact={true}
                render={routerProps => (
                  <About {...routerProps}/>
                )}
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
