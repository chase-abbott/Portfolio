import React, { useState } from 'react';

export default function Modal({ data }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div> 
      <h1> {data.name} </h1>
    </div>
  );
}