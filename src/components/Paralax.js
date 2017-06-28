import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/paralax.css';
import NameMain from './Name_Main';
import Project from './../containers/Project';






export default class Paralax extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='main-paralax-image'>
        <div className='space-creator'></div>
        <NameMain />
        <div className='project-rows-container'>
          <div className='project-container'>
            <Project />
            <Project />
            <Project />
          </div>
          {/* TEST */}
          <div className='project-container'>
            <Project />
            <Project />
            <Project />
          </div>
        </div>
        <div className='space-creator'></div>

      </div>
    )
  }

}
