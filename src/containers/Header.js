import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/header.css';


export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='header-main'>
        <div>
          <h4>Welcome!</h4>
        </div>
        <ul className='social-media-logos nav nav-pills'>
          <li><a href='#'><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href='#'><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>

      </div>
    )
  }

}
