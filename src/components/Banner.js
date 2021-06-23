import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { DiMongodb, DiPostgresql } from 'react-icons/di';

export default class Banner extends Component {
  
  render() {
    return (
      <IconContext.Provider value={{ size:'5em' }}>
        <div className="Banner grid grid-cols-5 bg-opacity-5 bg-black p-4">
          <label className="flex flex-col items-center">
            <FaNodeJs/>
            Node.js
          </label>        
          <label className="flex flex-col items-center">
            <FaReact/>
            React
          </label>        
          <label className="flex flex-col items-center">
            <DiMongodb/>
            MongoDb
          </label>        
          <label className="flex flex-col items-center">
            <DiPostgresql/>
            Postgres
          </label>        
          <label className="flex flex-col items-center justify-end">
            <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"></img>
           Express.js
          </label>        
        </div>
      </IconContext.Provider>
    );
  }

}