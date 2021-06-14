import { Component } from 'react';
import Projects from '../projects/Projects';
import data from '../../data/data.js';
// import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home mt-60 ">
        <div className="grid grid-rows-2 justify-center text-7xl text-green-600 leading-none mb-8">
          <span className="flex justify-self-start">FULL STACK</span> 
          <span className="flex justify-self-start ">SOFTWARE DEVLOPER</span> 
          <span className="flex justify-self-start ">BASED IN PORTLAND, OR</span>   
        </div>
        <div className=" grid grid-rows-2 text-green-600 mr-12">
          <p className="grid grid-cols-4 mb-4"> 
            <span className="col-start-3 col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat cursus sodales. Nam nisi erat, ultricies id rhoncus rutrum, aliquet vel lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat sit amet nunc feugiat sodales a aliquet leo. Vivamus pulvinar blandit cursus. Donec id efficitur lectus, eu sagittis nibh. 
            </span>
          </p>
          <p className="grid grid-cols-4 mb-4">
            <span className="col-start-3 col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat cursus sodales. Nam nisi erat, ultricies id rhoncus rutrum, aliquet vel lorem.
            </span>
          </p>
        </div>
        <Projects data={data.adventure}/>
      </div>
    );
  }

}