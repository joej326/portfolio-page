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
        <h3>Connect with me:</h3>
        <ul className='social-media-logos-footer nav nav-pills'>
          <li><a target='_blank' href='https://github.com/joej326'><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a target='_blank' href='https://www.linkedin.com/in/joseph-joyce/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a target='_blank' href='https://www.youtube.com/channel/UC3H1nNKhirn_HXiC1AyELdQ'><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
        </ul>

<div className='contact-field'>
  <p>E-mail: joej326@gmail.com</p>
  <p>Phone: (415) 686-5329</p>
  <p>© Joseph Joyce 2017</p>
</div>

      </div>
    )
  }

}
