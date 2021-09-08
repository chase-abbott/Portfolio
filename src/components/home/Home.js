import React from 'react';
import Projects from '../Projects';
import data from '../../data/data.js';
import Banner from '../Banner';
import Fade from 'react-reveal/Fade';
import './Home.css';

export default function Home() {

  return (  
    <div className="Home mt-32 w-full tablet:mt-48 font-theme">
      <Fade bottom cascade duration={2000}>
        <div className="grid grid-rows-2 justify-center text-2xl w-full tablet:text-6xl desktop:text-8xl text-green-600 leading-none mb-8 font-bold" >
          <span className="flex justify-self-start">FULL STACK</span>
          <span className="flex justify-self-start">SOFTWARE DEVLOPER</span>
          <span className="flex justify-self-start">BASED IN PORTLAND, OR</span>
        </div>
        <div className=" grid grid-rows-2 text-green-600 tablet:mr-12">
          <p className="grid grid-cols-4 tablet:grid-cols-4 mb-4">
            <span className="col-start-2 col-span-3 tablet:col-start-3 tablet:col-span-2 text-xs leading-none tablet:text-base">
              Winemaker turned developer focused on building interactive websites and RESTful APIs using clean and thouroughly tested code. I specialize in React and NodeJS and am always looking to add new tools to my toolbelt.
            </span>
          </p>
          <p className="grid grid-cols-4 tablet:grid-cols-4 mb-4">
            <span className="col-start-2 col-span-3 tablet:col-start-3 tablet:col-span-2 text-xs leading-none tablet:text-base">
              Right now I am working on creating an Office API using MongoDB, Mongoose, Express, and JSDOM and a Wedding Tracker in TypeScript!
            </span>
          </p>
        </div>
      </Fade>

      <Banner />
      <Projects data={data.zilch}/>
      <Projects data={data.scrape}/>
      <Projects data={data.hoops}/>
    </div>
  );
}
  