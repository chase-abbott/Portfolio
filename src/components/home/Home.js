import React, { Component } from 'react';
import Projects from '../Projects';
import data from '../../data/data.js';
import Banner from '../Banner';
import Fade from 'react-reveal/Fade';
import './Home.css';

export default class Home extends Component {


  render() {
    return (
      <div className="Home mt-32 w-full tablet:mt-60 font-theme">

        <Fade bottom cascade>
          <div className="grid grid-rows-2 justify-center text-2xl w-full tablet:text-5xl desktop:text-7xl text-green-600 leading-none mb-8 font-bold" >
            <span className="flex justify-self-start">FULL STACK</span>
            <span className="flex justify-self-start">SOFTWARE DEVLOPER</span>
            <span className="flex justify-self-start">BASED IN PORTLAND, OR</span>
          </div>
          <div className=" grid grid-rows-2 text-green-600 tablet:mr-12">
            <p className="grid grid-cols-4 tablet:grid-cols-4 mb-4">
              <span className="col-start-2 col-span-3 tablet:col-start-3 tablet:col-span-2 text-xs leading-none tablet:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat cursus sodales. Nam nisi erat, ultricies id rhoncus rutrum, aliquet vel lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae erat sit amet nunc feugiat sodales a aliquet leo. Vivamus pulvinar blandit cursus. Donec id efficitur lectus, eu sagittis nibh.
              </span>
            </p>
            <p className="grid grid-cols-4 tablet:grid-cols-4 mb-4">
              <span className="col-start-2 col-span-3 tablet:col-start-3 tablet:col-span-2 text-xs leading-none tablet:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat cursus sodales. Nam nisi erat, ultricies id rhoncus rutrum, aliquet vel lorem.
              </span>
            </p>
          </div>
        </Fade>

        <Banner />
        <Projects align={'left'} data={data.hoops} />
        <Projects align={'right'} data={data.adventure} />
      </div>
    );
  }

}