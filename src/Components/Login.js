import React, {Component} from 'react'
import GoogleLogin from 'react-google-login';
export default class Login  extends Component{

    render() {

        const responseFacebook = (response) => {
          console.log(response);
        }
    
        const responseGoogle = (response) => {
          console.log(response);
          var responseJson = JSON.parse(response);
          console.log(responseJson["googleId"]);
        }
    
        return (
          <div className="GoogleLogin">
              <br/>
            <h3>Please login to your google account to try IBM connect Integration flow for free.</h3>
             <br/>
             <br/>
             <br/>
    
          <GoogleLogin
            clientId="783846295086-uetrevvm3t5hmcsjdt4m9amlpfl7lh7f.apps.googleusercontent.com" 
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
    
          </div>
        );
      }
}
