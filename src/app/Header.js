import { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header fixed">
        <nav className="flex flex-row">
          <h2 className="text-green-600 p-4">Chase Abbott</h2>
          <h2 className="text-green-600 p-4"> About </h2>
        </nav>

        
      </header>
    );
  }

}
 
export default Header;