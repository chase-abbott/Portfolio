import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Banner() {
  return (
    <>
      <Fade bottom duration={1000}>
        <div className="Banner grid grid-cols-5 bg-gray-100 p-4 tablet:mt-16">
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
      </Fade>
    </>
  );
}
