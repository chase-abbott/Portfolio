import React from 'react';
import Fade from 'react-reveal/Fade';
export default function Projects({ data, align, setModalData, toggleModal }) {

  const handleClick = () => {
    toggleModal();
    setModalData(data);
  };

  return (
    <div className="tablet:mt-36 cursor-pointer" onClick={handleClick}>
      {/* {(align === 'left') ?
        <div id={data.label} className="Projects text-xs tablet:text-base font-theme text-green-600 tablet:h-.5vh tablet:relative">
          <Fade bottom>
            <div className="flex justify-center tablet:justify-start items-center tablet:self-center tablet:w-3/6 tablet:h-3/6 tablet:ml-16">
              <img src={data.image} className="tablet:mr-96 m-0" alt={data.name}></img>
            </div>
          </Fade>
          <Fade bottom delay={50}>
            <div className="flex items-center justify-center flex-col tablet:absolute tablet:right-80 tablet:bottom-16">
              <div className="grid grid-rows-2 custom-class" y={[-40, 20]} tagOuter="figure">
                <div className="grid grid-cols-projectLabel">
                  <label className="tablet:mt-6"> {data.label} </label>
                  <h3 className="desktop:text-8xl tablet:text-3xl tablet:font-black"> {data.name} </h3>
                </div>
                <span className="flex justify-self-end"> {data.tools}</span>
              </div>
            </div>
          </Fade>
        </div> : */}
      <div id={data.label} className="Projects grid text-xs tablet:text-base font-theme text-green-600 tablet:h-.5vh tablet:grid-cols-2 tablet:mt-12">
        <Fade bottom>
          <div className="flex justify-center tablet:justify-start items-center col-start-1">
            <img src={data.image} alt={data.name} className="w-full"></img>
          </div>
        </Fade>
        <Fade bottom delay={50}>
          <div className="flex flex-col col-start-2 items-center justify-center">
            <div className="custom-class grid grid-rows-2 justify-center" y={[-40, 40]} tagOuter="figure">
              <div className="grid grid-cols-projectLabel">
                <label className="tablet:mt-6"> {data.label} </label>
                <h3 className="desktop:text-6xl tablet:text-2xl tablet:font-black"> {data.name} </h3>
              </div>
              <span className="flex justify-self-end"> {data.tools}</span>
            </div>
          </div>
        </Fade>
      </div>
      {/* } */}
    </div>
  );
}
