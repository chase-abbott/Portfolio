import { Component } from 'react';

export default class Projects extends Component {
  
  render() {
    const { data, align } = this.props;
    return (
      <div>
        { (align === 'left') ?
          <div id={data.label} className="Projects font-theme text-green-600 grid grid-cols-2 ">
            <a href={data.URL} target="_blank" rel="noreferrer">
              <img src={data.image} className="max-w-full" alt={data.name}></img>
            </a>
            <div className="flex items-center justify-center flex-col">
              <div className="grid grid-cols-projectLabel">
                <label> {data.label} </label>
                <h3 className="text-6xl"> {data.name} </h3>
              </div>
              <span> {data.tools}</span>
            </div>
          </div>
          : <div id={data.label} className="Projects font-theme text-green-600 grid grid-cols-2 grid-rows-1">
            <div className="flex items-center justify-center flex-col">
              <div className="grid grid-cols-projectLabel">
                <label> {data.label} </label>
                <h3 className="text-6xl"> {data.name} </h3>
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