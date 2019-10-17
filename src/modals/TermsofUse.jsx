import React, {Component} from 'react'
import termsofuse from '../assets/termsofuse.png';

import Button from 'react-bootstrap/Button';
import '../styles/common.css';
export default class TermsOfUse  extends Component{

  
render() {
  
        return (
          <div >
            <h3 className ="heading">Terms of Use</h3>
            <img src={termsofuse} width="80%"  height="50%" />
             <br/>
             <div className="buttonContainerView">
                <div className="buttonContainer">
                  <Button variant="light">Decline</Button>
                </div>
                <div className="buttonContainer">
                  <Button variant="primary">Accept</Button>
                </div>
            </div>
              {/* <div className="DottedBox">
               <p className="DottedBox_content">Get started with CSS styling</p>
              </div> */}
          </div>
        );
      }
}
