import React from 'react';
import Zoom from 'react-reveal/Zoom';

export default function Modal({ modalData, showModal, toggleModal }) {
  

  return (
    <> 
      {showModal
        ? 
        <div className="flex justify-center w-full h-full items-center fixed bg-gray-100">
          <Zoom duration={300}>
            <div className="grid grid-rows-2 tablet:w-4/12 tablet:h-4/6  w-11/12 h-2/5 relative z-10 shadow-lg rounded-2xl bg-white">
              <button className="cursor-pointer absolute right-3 top-3 text-xxs tablet:text-base rounded-full w-5 h-5 tablet:w-6 tablet:h-6 bg-green-600 text-white font-mono hover:bg-green-700" onClick={toggleModal}> X </button>
              <div className="flex">
                <img src={modalData.image} alt={modalData.label} className=" w-full h-full rounded-t-xl" />
              </div>
              <div className="flex flex-col items-center h-full">
                <h2 className="tablet:text-3xl text-s text-green-600 font-theme tablet:mt-4"> {modalData.name} </h2>
                <h6 className="tablet:text-xl text-tiny text-green-600 font-theme"> {modalData.tools} </h6>
                <p className="w-10/12 text-xxs tablet:text-s font-theme"> {modalData.description} </p>
                <div className="flex h-full w-full justify-evenly items-end mb-4">
                  <a href={modalData.githubURL} className="text-green-600 font-theme underline tablet:text-base text-xs hover:text-green-700" target="_blank" rel="noreferrer"> GitHub </a>
                  {modalData.URL
                    ? <a href={modalData.URL} className="text-green-600 font-theme underline tablet:text-base text-xs hover:text-green-700" target="_blank" rel="noreferrer"> Website </a>
                    : null}
                </div>
              </div>
            </div>
          </Zoom>
        </div>
        : null
      }
    </>
  );
}