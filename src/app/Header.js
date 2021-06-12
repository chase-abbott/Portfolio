import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header fixed w-full">
        <nav className="grid grid-cols-2 content-between w-full">
          <h2 className="cursor-pointer text-green-600 p-6">
            <Link to="/">
            Chase Abbott
            </Link>
          </h2>
          <h2 className="cursor-pointer justify-self-end text-green-600 p-6">
            <Link to="/about">
             About 
            </Link>
          </h2>
        </nav>

        
      </header>
    );
  }

}
 
export default Header;