import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


export default function Projects({ data }) {

  return (
    <Link to={`/details/${data.name}`}>
      <div className="tablet:mt-32 cursor-pointer p-4 tablet:p-0">
        <div id={data.label} className="Projects grid text-xs tablet:text-base font-theme text-green-600 tablet:h-full tablet:grid-cols-2">
          <Fade bottom duration={1000}>
            <div className="flex justify-center tablet:justify-start items-center tablet:col-start-1">
              <img src={data.image} alt={data.name} className="w-full h-40 tablet:h-96"></img>
            </div>
          </Fade>
          <Fade bottom duration={1000} delay={100}>
            <div className="flex flex-col tablet:col-start-2 items-center justify-center tablet:justify-center">
              <div className="custom-class grid tablet:grid-rows-2 justify-center" tagOuter="figure">               
                <h3 className="desktop:text-6xl tablet:text-2xl text-xl tablet:font-black"> {data.name} </h3>     
                <span className="flex justify-self-end"> {data.tools}</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Link>
  );
}
