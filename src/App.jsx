import React , {Component} from 'react';

import './App.css';
// import RouteConfig from './navigation/Navigation';
import Login from './components/Login';
//import Nav from './navigation/Navigation';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Integration from "./components/Integration";
import Dashboard from "./components/Dashboard";
import TwilioIntegration from "./components/TwilioIntegration";
import SetTwilioDetails from "./components/SetTwilioDetails";
import TermsOfUse from './modals/TermsofUse';

export default class App extends Component {
  state = {
    isUserSignedIn: false,
    accessToken: '',
    emailID: ''
  }

   componentDidMount() {
    this.checkLocalSotrage();
  }

   checkLocalSotrage() {
    const emailID = localStorage.getItem('emailID');
    const accessToken = localStorage.getItem('accessToken');
    const isUserSignedIn = (emailID!== '') ? true  : false;
    console.log(isUserSignedIn);
    this.setState({ emailID : emailID, accessToken:accessToken , isUserSignedIn : isUserSignedIn});
    console.log("Email ID", emailID);
  }  

  render() {
    console.log("isUserSignedIn", this.state.isUserSignedIn);
    return (
      <Router>
           <div className ="App">
            
            <Switch>
              <Route exact path="/"   component= {Login} />
              <Route path= "/termsofuse"   component= {TermsOfUse} />
              <Route path= "/integration"   component= {Integration} />
              <Route path= "/dashboard"   component= {Dashboard} />
              <Route path= "/dashboard/twilio"   component= {TwilioIntegration} />
              <Route path= "/dashboard/setdetails"   component= {SetTwilioDetails} />
              
            </Switch>
          </div>
      </Router>
      /* <div className="App">
          {!this.state.isUserSignedIn ? <Login />: <RouteConfig />
          }
      </div> */
    );
  }
}

const Home =() => (
  <div>
    <h3> Home</h3>
  </div>
);

