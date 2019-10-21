import React, {Component} from 'react'
import GoogleLogin from 'react-google-login';
import '../App.css';
import {
  Redirect
} from "react-router-dom";
import googleClientId from '../config';

export default class Login  extends Component{
  state = {
    emailID: '',
    googleId: '',
    accessToken : '',
    firstTimeSignIn :false,
    redirect: false ,
  };

  constuctor() {
    //this.routeChange = this.routeChange.bind(this);
  }
  componentDidMount() {
    const emailID = localStorage.getItem('emailID');
    const accessToken = localStorage.getItem('accessToken');
    const firstTimeSignIn = localStorage.getItem('firstTimeSignIn');
    this.setState({ emailID, accessToken ,firstTimeSignIn });
    console.log("Login component mount first time sign in", this.state.firstTimeSignIn);
  }
  setRedirect = () => {
    console.log("setRedirect");
    this.setState({
      redirect: true
    })
  }
  routeChange = () => {
    if (this.state.redirect) {
      console.log(" route change: first time sign in ", this.state.firstTimeSignIn);
      if(this.state.firstTimeSignIn){ //check if user is signing in first time
        localStorage.setItem('firstTimeSignIn',false);
        return <Redirect to='/termsofuse' />
      }else { // take user to integration screen
        return <Redirect to='/integration' />
      }
    }
  }
  /* routeChange() {
      let path = `/termsofuse`;
      this.props.history.push(path);
    
  } */
    render() {
        const responseGoogle = (response) => {
          console.log(response);
          let responseJson = JSON.stringify(response);
          console.log(responseJson);
          responseJson =JSON.parse(responseJson);
          console.log(responseJson);
          // console.log(responseJson['profileObj']['googleId']);
          // console.log(responseJson['profileObj']['email']);
          this.setState({emailID : responseJson['profileObj']['email'] , accessToken : responseJson['accessToken'],googleId :responseJson['profileObj']['googleId'] , firstTimeSignIn :true })
          const { emailID, accessToken , firstTimeSignIn } = this.state;
          localStorage.setItem('emailID', emailID);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('firstTimeSignIn',true);
          //this.routeChange();
          this.setRedirect();
        }
    
        return (
          <div>
            <div className="googleLogin">
                <h3>Please login to your google account to try IBM connect Integration flow for free.</h3>
            </div>
            <div className = "googleLogin">
            {this.routeChange()}
                <GoogleLogin
                clientId= "783846295086-uetrevvm3t5hmcsjdt4m9amlpfl7lh7f.apps.googleusercontent.com" 
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            </div>
          </div>
        );
      }
}
