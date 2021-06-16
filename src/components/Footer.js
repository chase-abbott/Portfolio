import { Component } from 'react';


class Footer extends Component {

  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  render() { 
    return (
      <footer className="Footer grid grid-rows-2 max-h-36 font-theme">
        <div className="grid grid-cols-3 h-4">
          <div className="grid grid-rows-4 justify-center">
            <label className="text-green-600 hover:underline"> 
              <a href="https://github.com/chase-abbott" target="_blank" rel="noreferrer"> GitHub </a>
            </label>
            <label className="text-green-600 hover:underline">
              <a href="https://www.linkedin.com/in/chase-abbott/" target="_blank" rel="noreferrer"> LinkedIn </a>
            </label>
            <label className="row-start-4 text-green-600 hover:underline">
              <a href="mailto:cabbott93@gmail.com"> cabbott93@gmail.com </a>
            </label>
          </div>
          <div className="flex flex-col justify-end text-green-600 items-center">
            <label> Design By: </label>
            <a href="https://www.martin-laxenaire.fr/" target="_blank" className="hover:underline" rel="noreferrer"> Martin Laxenaire</a>
          </div>
          <div className="flex items-end justify-center text-green-600 hover:underline"> 
            <button onClick={this.scrollToTop}> Back to Top </button>
          </div>
        </div>
        <span className="flex justify-self-center text-green-600 text-7xl w-100vw font-black mt-8"> REACH OUT </span>
      </footer>
    );
  }
}
 
export default Footer;