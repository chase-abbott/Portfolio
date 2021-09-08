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
        <div className="flex justify-center items-center ">     
          <div className="flex flex-col tablet:w-7/12 tablet:h-4/6  w-11/12 h-2/5 bg-white">
            <div className="flex">
              <img src={componentData.image} alt={componentData.label} className=" w-full h-full" />
            </div>
            <div className="flex flex-col items-center p-4">
              <h2 className="tablet:text-3xl text-s text-green-600 font-theme tablet:mt-4"> {componentData.name} </h2>
              <h6 className="tablet:text-xl text-tiny text-green-600 font-theme"> {componentData.tools} </h6>
              <p className="w-full text-xxs tablet:text-s font-theme tablet:p-8 p-1"> {componentData.description} </p>
              <div className="flex justify-evenly w-full items-start mb-4">
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