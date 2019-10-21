import React, {Component} from 'react'
import termsofuse from '../assets/termsofuse.png';
import Button from 'react-bootstrap/Button';
import '../styles/common.css';
import {
  Redirect
} from "react-router-dom";

export default class TermsOfUse  extends Component{
  state = {
    redirect: false,
    isDecline:false
  };
  setRedirect = () => {
    console.log("setRedirect");
    const isDecline = false;
    this.setState({
      redirect: true,
      isDecline : isDecline
    })
  }
  routeChange = () => {
    if (this.state.redirect) {
      if(this.state.isDecline){ //if decline tapped
        return <Redirect to='/' />
      } else { // else accept tapped
        localStorage.clear()
        return <Redirect to='/integration' />
      }
    }
  }
render() {
  
        return (
          <div >
            
            <h3 className ="heading">Terms of Use</h3>
            <img src={termsofuse} width="80%"  height="50%" />
             <br/>
             <div className="buttonContainerView">
             {this.routeChange()}
                <div className="buttonContainer">
                  <Button variant="outline-secondary">Decline</Button>
                  {/* onClick={this.setRedirect()} */}
                </div>
                <div className="buttonContainer">
                  <Button variant="primary" type="submit" onClick={this.setRedirect()} >Accept</Button>
                </div>
            </div>
          </div>
        );
      }
}
