import React, { useState } from 'react';
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
import Modal from '../components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="App z-0">
      <Modal showModal={showModal} 
        toggleModal={toggleModal} 
        modalData={modalData}/>
   
      <Router>
        <Route
          render={routerProps => (
            <Header {...routerProps} 
              showModal={showModal}
              toggleModal={toggleModal} />
          )}
        />

        <main className="m-4 tablet:m-8">
          <Switch>
            <Route path="/" exact
              render={routerProps => (
                <Home {...routerProps} 
                  toggleModal={toggleModal} 
                  showModal={showModal} 
                  setModalData={setModalData}/>
              )}
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
        <Footer showModal={showModal} toggleModal={toggleModal}/>
      </Router>
      
    </div>
  );
}


export default App;
