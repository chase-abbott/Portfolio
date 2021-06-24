import React, { Component } from 'react';

export default class Banner extends Component {

  render() {
    return (
      <div className="Banner grid grid-cols-5 bg-opacity-5 bg-black p-4 mb-4 ">
        <label className="flex justify-center w-12 h-8 tablet:w-auto tablet:h-auto ">
          <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="postgres"></img>
        </label>
        <label className="flex justify-center items-center w-12 h-8 tablet:w-auto tablet:h-auto ">
          <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="mongodb"></img>
        </label>
        <label className="flex justify-center w-12 h-8 tablet:w-auto tablet:h-auto ">
          <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="node.js"></img>
        </label>
        <label className="flex justify-center w-12 h-8 tablet:w-auto tablet:h-auto ">
          <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="react"></img>
        </label>
        <label className="flex justify-center w-12 h-8 tablet:w-auto tablet:h-auto ">
          <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express.js"></img>
        </label>
      </div>
    );
  }

}