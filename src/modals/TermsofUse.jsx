import React, {Component} from 'react'
import termsofuse from '../assets/termsofuse.png';
import Button from 'react-bootstrap/Button';
// import '../styles/modal.css';
import {
  Redirect
} from "react-router-dom";

export default class TermsOfUse  extends Component{
  state = {
    redirect: false,
    isAccepted:false
  };
  
  setRedirect = () => {  //accepted
    const accepted =true;
    this.setState({
      redirect: true,
      isAccepted:accepted
    })
  }

  /* setRedirect(accepted) {
    this.setState({
      redirect: true,
      isAccepted:accepted
    })
  } */
  componentDidMount(){
    console.log(" terms of use component mount");
    localStorage.setItem('firstTimeSignIn',false);
  }
  routeChange = () => {
     if (this.state.redirect) {
      //if(this.state.isAccepted){ //if accept tapped
        return <Redirect to='/integration' />
      // } else { // else decline tapped 
      //   localStorage.clear()
      //   return <Redirect to='/' />
        
      // }
    } 
  }
  
  handleClick(){
    console.log("terms of use setRedirect");
   const isDecline = false;
    this.setState({
      redirect: true,
      isDecline : isDecline
    })
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
//   render() {
//     if (!this.props.show) {
//       return null;
//     }
//     return (
//       <div class="modal" id="modal">
//         <h2>Modal Window</h2>
//         <div class="content">{this.props.children}</div>
//         <div class="actions">
//           <button class="toggle-button" onClick={this.onClose}>
//             close
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
render() {
  
        return (

         
            // <div style={{ width: 500, alignItems: "center" }}>
            //   {this.routeChange()}
            //   </div>
          <div >
             {this.routeChange()}
            <h3 className ="heading">Terms of Use</h3>
            <img src={termsofuse} width="80%"  height="50%" />
             <br/>
             <div className="buttonContainerView">
             <Button variant="outline-secondary" onClick={this.setRedirect}>Decline</Button>
             <Button variant="primary" onClick={this.setRedirect}>Accept</Button>
                {/* <div className="buttonContainer"> 
                  <Button variant="outline-secondary" activetype="submit"
                     onClick={this.setRedirect(true)}
                  >Decline</Button>
                 
                </div>
                <div className="buttonContainer">
                  <Button variant="primary" activetype="submit" 
                   onClick={this.setRedirect(false)}
                  >Accept</Button>
                </div> */}
            </div>
          </div>
        );
      }
}


