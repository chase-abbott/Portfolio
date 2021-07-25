import React from 'react';

export default function Modal({ modalData, showModal, toggleModal }) {
  

  return (
    <> 
      {showModal
        ? 
        <div className="flex justify-center w-full h-full items-center fixed bg-gray-200">
          <div className="grid grid-rows-2 w-6/12 h-4/6 relative z-10 shadow-lg rounded-2xl bg-white">
            <button className="cursor-pointer absolute right-3 top-3 bg-green-600 rounded-full w-6 h-6 text-white" onClick={toggleModal}> X </button>
            <div className="flex">
              <img src={modalData.image} alt={modalData.label} className=" w-full h-full rounded-t-xl" />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="tablet:text-3xl text-green-600 font-theme tablet:mt-4"> {modalData.name} </h2>
              <h6 className="tablet:text-xl text-green-600 font-theme"> {modalData.tools} </h6>
              <p> {modalData.description} </p>
              <div className="flex w-full justify-evenly">
                <a href={modalData.githubURL} className="text-green-600 font-theme underline" target="_blank" rel="noreferrer"> GitHub </a>
                {modalData.URL
                  ? <a href={modalData.URL} className="text-green-600 font-theme underline" target="_blank" rel="noreferrer"> Website </a>
                  : null}
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </>
  );
}