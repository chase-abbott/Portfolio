import React, { useEffect, useState } from 'react';
import data from '../data/data';

export default function Modal({ match }) {
  const [componentData, setComponentData] = useState(null);
  
  useEffect(() => {
    for (const project in data){
      if (data[project].label === match.params.label) return setComponentData(data[project]);
    }
  }, [match.params.label]);

  return (
    <>
      {componentData ?
        <div className="flex justify-center w-full h-full items-center bg-gray-100">     
          <div className="grid grid-rows-2 tablet:w-4/12 tablet:h-4/6  w-11/12 h-2/5 relative z-10 shadow-lg rounded-2xl bg-white">
            <button className="cursor-pointer absolute right-3 top-3 text-xxs tablet:text-base rounded-full w-5 h-5 tablet:w-6 tablet:h-6 bg-green-600 text-white font-mono hover:bg-green-700"> X </button>
            <div className="flex">
              <img src={componentData.image} alt={componentData.label} className=" w-full h-full rounded-t-xl" />
            </div>
            <div className="flex flex-col items-center h-full">
              <h2 className="tablet:text-3xl text-s text-green-600 font-theme tablet:mt-4"> {componentData.name} </h2>
              <h6 className="tablet:text-xl text-tiny text-green-600 font-theme"> {componentData.tools} </h6>
              <p className="w-10/12 text-xxs tablet:text-s font-theme"> {componentData.description} </p>
              <div className="flex h-full w-full justify-evenly items-end mb-4">
                <a href={componentData.githubURL} className="text-green-600 font-theme underline tablet:text-base text-xs hover:text-green-700" target="_blank" rel="noreferrer"> GitHub </a>
                {componentData.URL
                  ? <a href={componentData.URL} className="text-green-600 font-theme underline tablet:text-base text-xs hover:text-green-700" target="_blank" rel="noreferrer"> Website </a>
                  : null}
              </div>
            </div>
          </div>
        </div>
        : null }
    </>
  );
}