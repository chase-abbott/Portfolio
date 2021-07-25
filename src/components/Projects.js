import React from 'react';
import Fade from 'react-reveal/Fade';
export default function Projects({ data, align, setModalData, toggleModal }) {

  const handleClick = () => {
    toggleModal();
    setModalData(data);
  };

  return (
    <div className="tablet:mt-36 cursor-pointer" onClick={handleClick}>
      <div id={data.label} className="Projects grid text-xs tablet:text-base font-theme text-green-600 tablet:h-.5vh tablet:grid-cols-2 mt-12">
        <Fade bottom duration={1000}>
          <div className="flex justify-center tablet:justify-start items-center tablet:col-start-1">
            <img src={data.image} alt={data.name} className="w-full"></img>
          </div>
        </Fade>
        <Fade bottom duration={1000} delay={100}>
          <div className="flex flex-col tablet:col-start-2 items-center justify-center tablet:justify-center">
            <div className="custom-class grid tablet:grid-rows-2 justify-center" tagOuter="figure">
              <div className="tablet:grid tablet:grid-cols-projectLabel flex justify-center">
                <label className=" tablet:text-s text-tiny tablet:mt-6 tablet:mr-4"> {data.label} </label>
                <h3 className="desktop:text-6xl tablet:text-2xl tablet:font-black"> {data.name} </h3>
              </div>
              <span className="flex justify-self-end"> {data.tools}</span>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
