import React, { Component } from 'react';

export default class Projects extends Component {
  
  render() {
    const { data, align } = this.props;
    return (
      <div>
        { (align === 'left') ?
          <div id={data.label} className="Projects text-xs tablet:text-base font-theme text-green-600 grid tablet:grid-cols-2">
            <a href={data.URL} className="flex justify-center bg-black" target="_blank" rel="noreferrer">
              <img src={data.image} className="" alt={data.name}></img>
            </a>
            <div className="flex items-center justify-center flex-col">
              <div className="grid grid-cols-projectLabel">
                <label> {data.label} </label>
                <h3 className="desktop:text-6xl tablet:text-3xl"> {data.name} </h3>
              </div>
              <span> {data.tools}</span>
            </div>
          </div>
          : <div id={data.label} className="Projects  text-xs tablet:text-base font-theme text-green-600 grid grid-rows-projects grid-cols-1 mt-10 tablet:grid-cols-2 tablet:grid-rows-1 tablet:m-0">
            <div className="flex row-start-2 col-start-2 tablet:row-start-1 tablet:col-start-1 items-center justify-center flex-col">
              <div className="grid grid-cols-projectLabel">
                <label> {data.label} </label>
                <h3 className="desktop:text-6xl tablet:text-3xl"> {data.name} </h3>
              </div>
              <span> {data.tools}</span>
            </div>
            <a href={data.URL} className="col-start-2" target="_blank" rel="noreferrer">
              <img src={data.image} className="max-w-full" alt={data.name}></img>
            </a>
          </div>
        }
      </div>
    );
  }

}