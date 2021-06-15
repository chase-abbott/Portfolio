import { Component } from 'react';

export default class Projects extends Component {
  
  render() {
    const { data } = this.props;
    return (
      <div className="Projects mb-48 font-theme text-green-600 grid grid-cols-2 ">
        <a href={data.URL} target="_blank" rel="noreferrer">
          <img src={data.image} className="max-w-full" alt={data.name}></img>
        </a>
        <div>
          <div className="grid grid-cols-projectLabel">
            <label> {data.label} </label>
            <h3 className="text-6xl"> {data.name} </h3>
          </div>
          <span> {data.tools}</span>
        </div>
       
      </div>
    );
  }

}