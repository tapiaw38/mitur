import React from 'react';
import './loader.scss'

export const Loader = () => {
  return (
    <div className='loader-container flex flex-row align-items-center justify-content-center'>
        <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};
