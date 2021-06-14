import { Component } from 'react';
import './Projects.css';

export default class Projects extends Component {
  
  render() {
    const { data } = this.props;
    return (
      <div className="Projects">
        <img src={data.image} className="max-w-2/3"></img>
      </div>
    );
  }

}