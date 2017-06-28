import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './../style/footer.css';


export default class Footer extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='footer-main'>
        <h3>Connect with me on social media:</h3>
        <ul className='social-media-logos-footer nav nav-pills'>
          <li><a href='#'><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href='#'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    )
  }

}
