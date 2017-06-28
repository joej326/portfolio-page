import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/nameMain.css';






export default class NameMain extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='name-main'>
        <h4>Joseph Joyce</h4>
        <h5>Full Stack Web Developer</h5>
        <h6>Check Out My Projects:</h6>
      </div>
    )
  }

}
