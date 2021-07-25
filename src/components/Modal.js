import React from 'react';

export default function Modal({ modalData, showModal, toggleModal }) {
  
  return (
    <> 
      {showModal
        ? 
        <div className="flex justify-center w-full h-full items-center fixed bg-gray-400">
          <div className="grid grid-cols-2 items-center w-6/12 h-4/6 relative z-10 shadow-lg rounded-2xl  text-white bg-black">
            <button className="cursor-pointer"onClick={toggleModal}> Close </button>
            <div>
              <h3> {modalData.name}</h3>
            </div>
          </div>
        </div>
        : null
      }
    </>
  );
}