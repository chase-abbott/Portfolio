import React, { Component } from 'react';

export default class Projects extends Component {

  render() {
    const { data, align } = this.props;
    return (
      <div>
        {(align === 'left') ?
          <div id={data.label} className="Projects text-xs tablet:text-base font-theme text-green-600 tablet:h-.5vh tablet:relative">
            <a href={data.URL} className="flex justify-center items-center tablet:self-center" target="_blank" rel="noreferrer">
              <img src={data.image} className="tablet:w-3/6 tablet:h-3/6 tablet:mr-96" alt={data.name}></img>
            </a>
            <div className="flex items-center justify-center flex-col tablet:absolute tablet:right-16 tablet:bottom-16 ">
              <div className="grid grid-cols-projectLabel">
                <label className="tablet:mt-6"> {data.label} </label>
                <h3 className="desktop:text-8xl tablet:text-3xl"> {data.name} </h3>
              </div>
              <span> {data.tools}</span>
            </div>
          </div>
          : <div id={data.label} className="Projects text-xs tablet:text-base font-theme text-green-600 tablet:h-.5vh grid-rows-projects grid-cols-1 mt-10 tablet:mt-8 tablet:relative">
            <div className="flex row-start-2 col-start-2 items-center justify-center flex-col tablet:absolute tablet:right-16 tablet:bottom-16">
              <div className="grid grid-cols-projectLabel">
                <label className="tablet:mt-6"> {data.label} </label>
                <h3 className="desktop:text-8xl tablet:text-3xl"> {data.name} </h3>
              </div>
              <span> {data.tools}</span>
            </div>
            <a href={data.URL} className="flex justify-center items-center col-start-2" target="_blank" rel="noreferrer">
              <img src={data.image} className="tablet:w-3/6 tablet:h-3/6" alt={data.name}></img>
            </a>
          </div>
        }
      </div>
    );
  }

}