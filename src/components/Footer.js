import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

class Footer extends Component {

  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  render() { 
    return (
      <footer className="Footer grid grid-rows-footerRows font-theme m-8 tablet:mt-20">

        <Bounce left duration={2000}>
          <div className="border-solid border-b-2 border-green-600 mb-4"></div>
        </Bounce>
        <div className="text-tiny tablet:text-base grid grid-cols-3">

          <Bounce left cascade>
            <div className="grid grid-rows-2 justify-center h-max">
              <div className="flex flex-col w-max">
                <label className="text-green-600 hover:underline"> 
                  <a href="https://github.com/chase-abbott" target="_blank" rel="noopener noreferrer"> GitHub </a>
                </label>
                <label className="text-green-600 hover:underline">
                  <a href="https://www.linkedin.com/in/chase-abbott/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
                </label>
              </div>
              <label className="flex items-end row-start-2 text-green-600 hover:underline">
                <a href="mailto:cabbott93@gmail.com"> cabbott93@gmail.com </a>
              </label>
            </div>
          </Bounce>

          <Zoom top cascade>
            <div className="flex flex-col justify-end text-green-600 items-center">
              <label> Design By: </label>
              <a href="https://www.martin-laxenaire.fr/" target="_blank" className="hover:underline" rel="noopener noreferrer"> Martin Laxenaire</a>
            </div>
          </Zoom>

          <Bounce right>
            <div className="flex items-end justify-center text-green-600 hover:underline"> 
              <button onClick={this.scrollToTop}> Back to Top </button>
            </div>
          </Bounce>

        </div>

        <Fade left cascade>
          <span className="flex justify-self-center text-green-600 text-3xl tablet:text-7xl w-100vw font-black mt-4"> REACH OUT </span>
        </Fade>
      </footer>
    );
  }
}
 
export default Footer;