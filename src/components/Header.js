import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {

  handleMouseEnter = () => {
    const ul = document.getElementById('nav-dropdown');
    ul.classList.remove('hidden');
  }

  handleMouseLeave = () => {
    const ul = document.getElementById('nav-dropdown');
    ul.classList.add('hidden');
  }

  scrollToProjects = async () => {
    const { history } = this.props;
    const url = new URL(document.location);
    if (url.pathname === '/'){
      document.getElementById('01').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      await history.push('/');
      document.getElementById('01').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } 
  }

  render() { 
    return (
      <header className="Header fixed w-full text-xl font-theme bg-opacity-50 bg-white">
        <nav className="grid grid-cols-3 content-between w-full">
          <h2 className="cursor-pointer text-green-600 p-6 w-max" 
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave}>
            <NavLink to="/" className="hover:underline cursor-pointer">Chase Abbott</NavLink>
            <ul id="nav-dropdown" className="hidden grid hover:grid-rows-3">
              <li className="hover:underline w-max">
                <a href="https://www.linkedin.com/in/chase-abbott/">LinkedIn </a>
              </li>
              <li className="hover:underline w-max">
                <a href="https://github.com/chase-abbott"> GitHub </a>
              </li>
              <li className="hover:underline w-max" onClick={this.scrollToProjects}>Projects</li>
            </ul>
          </h2>
          <h2 className="justify-self-center cursor-pointer text-green-600 p-6 hover:underline">
            <NavLink to="/resume">
            Resume
            </NavLink>
          </h2>
          <h2 className="cursor-pointer justify-self-end text-green-600 p-6 hover:underline">
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