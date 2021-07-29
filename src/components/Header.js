import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ history, toggleModal, showModal }) {

  const scrollToProjects = async () => {
    const url = new URL(document.location);
    if (url.pathname === '/'){
      document.getElementById('01').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // try to use .then
      await history.push('/');
      document.getElementById('01').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } 
  };

  return (
    <>
      {!showModal 
        ? <header className="Header sticky w-full text-xs tablet:text-base desktop:text-xl font-theme bg-opacity-50 bg-white">
          <nav className="grid grid-cols-3 w-full">
            <h2 className="justify-self-center cursor-pointer text-green-600 p-6 w-max" >
              <NavLink to="/" className="hover:underline cursor-pointer" onClick={scrollToProjects}>Chase Abbott</NavLink>
            </h2>
            <a href="https://drive.google.com/file/d/1usWMIR1vCZ4Ty1O0aCDhBxal7hKrN1_-/view?usp=sharing" target="_blank" className="justify-self-center cursor-pointer text-green-600 p-6 hover:underline" rel="noreferrer">
              <h2>             
            Resume
              </h2>
            </a>
            <h2 className="cursor-pointer justify-self-center text-green-600 p-6 hover:underline">
              <NavLink to="/about">
             About 
              </NavLink>
            </h2>
          </nav>
        </header>
        : null}
    </>
  );
}