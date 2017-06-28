import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/project.css';


export default class Project extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='project-main-div'>
        <img className='project'
             src="http://www.hardwickagriculture.org/blog/wp-content/uploads/placeholder.jpg"
             alt="placeholder"
        />
        <h3>Project Title</h3>
      </div>
    )
  }

}
