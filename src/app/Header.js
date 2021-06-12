import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header fixed w-full">
        <nav className="grid grid-cols-3 content-between w-full">
          <h2 className="cursor-pointer text-green-600 p-6 underline">
            <NavLink to="/">
            Chase Abbott
            </NavLink>
          </h2>
          <h2 className="justify-self-center cursor-pointer text-green-600 p-6 underline">
            <NavLink to="/resume">
            Resume
            </NavLink>
          </h2>
          <h2 className="cursor-pointer justify-self-end text-green-600 p-6 underline">
            <NavLink to="/about">
             About 
            </NavLink>
          </h2>
        </nav>

        
      </header>
    );
  }

}
 
export default Header;