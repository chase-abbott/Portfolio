import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

export default class Projects extends Component {


  render() {
    const { data, align } = this.props;

    return (
      <div className="tablet:mt-36">
        <ParallaxProvider>
          {(align === 'left') ?
            <div id={data.label} className="Projects text-xs tablet:text-base font-theme text-green-600 tablet:h-.5vh tablet:relative">
              <Fade bottom>
                <div className="flex justify-center tablet:justify-start items-center tablet:self-center tablet:w-3/6 tablet:h-3/6 tablet:ml-16">
                  <img src={data.image} className="tablet:mr-96 m-0" alt={data.name}></img>
                </div>
              </Fade>
              <Fade bottom delay={50}>
                <div className="flex items-center justify-center flex-col tablet:absolute tablet:right-80 tablet:bottom-16">
                  <Parallax className="custom-class" y={[-40, 20]} tagOuter="figure">
                    <div className="grid grid-cols-projectLabel">
                      <label className="tablet:mt-6"> {data.label} </label>
                      <h3 className="desktop:text-8xl tablet:text-3xl tablet:font-black"> {data.name} </h3>
                    </div>
                    <span> {data.tools}</span>
                  </Parallax>
                </div>
              </Fade>
            </div>
            : <div id={data.label} className="Projects text-xs tablet:text-base font-theme text-green-600 tablet:h-.5vh grid-rows-projects grid-cols-1 mt-10 tablet:mt-8 tablet:relative">
              <Fade bottom>
                <div className="flex justify-center tablet:justify-start items-center col-start-2 tablet:w-3/6 tablet:h-3/6 tablet:ml-16">
                  <img src={data.image} alt={data.name}></img>
                </div>
              </Fade>
              <Fade bottom delay={50}>
                <div className="flex row-start-2 col-start-2 items-center justify-center flex-col tablet:absolute tablet:right-1 tablet:top-44">
                  <Parallax className="custom-class grid grid-rows-2" y={[-40, 40]} tagOuter="figure">
                    <div className="grid grid-cols-projectLabel">
                      <label className="tablet:mt-6"> {data.label} </label>
                      <h3 className="desktop:text-8xl tablet:text-3xl tablet:font-black"> {data.name} </h3>
                    </div>
                    <span className="justify-self-end"> {data.tools}</span>
                  </Parallax>
                </div>
              </Fade>
            </div>
          }
        </ParallaxProvider>

      </div>
    );
  }

}