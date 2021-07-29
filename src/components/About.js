import React from 'react';

export default function About() {

  return (
    <div className="grid grid-cols-2 justify-center w-10/12">
      <img 
        src='./Chase (2).jpg' 
        alt="headshot"
        className="w-6/12 justify-self-end"
      />
      <p className="flex justify-start items-center col-start-2 ml-16">
        Full Bio Coming Soon...
      </p>
    </div>
  );
}
