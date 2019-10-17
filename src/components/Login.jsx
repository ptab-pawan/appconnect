import React, {Component} from 'react'
import GoogleLogin from 'react-google-login';
import '../App.css';
 
export default class Login  extends Component{
  state = {
    emailID: '',
    googleId: '',
    accessToken : ''
  };

  componentDidMount() {
    const emailID = localStorage.getItem('emailID');
    const accessToken = localStorage.getItem('accessToken');
    this.setState({ emailID, accessToken });
  }
    render() {
        const responseGoogle = (response) => {
          console.log(response);
          let responseJson = JSON.stringify(response);
          console.log(responseJson);
          responseJson =JSON.parse(responseJson);
          console.log(responseJson);
          // console.log(responseJson['profileObj']['googleId']);
          // console.log(responseJson['profileObj']['email']);
          this.setState({emailID : responseJson['profileObj']['email'] , accessToken : responseJson['accessToken'],googleId :responseJson['profileObj']['googleId']  })
          const { emailID, accessToken } = this.state;
          localStorage.setItem('emailID', emailID);
          localStorage.setItem('accessToken', accessToken);
        }
    
        return (
          <div>
            <div className="googleLogin">
                <h3>Please login to your google account to try IBM connect Integration flow for free.</h3>
            </div>
            <div className = "googleLogin">
                <GoogleLogin
                clientId="783846295086-uetrevvm3t5hmcsjdt4m9amlpfl7lh7f.apps.googleusercontent.com" 
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            </div>
          </div>
        );
      }
}
