import React , {Component} from 'react';

import './App.css';
// import RouteConfig from './navigation/Navigation';
import Login from './components/Login';
//import Nav from './navigation/Navigation';
import {
    BrowserRouter as Router,
    Switch,
    Route,withRouter ,Redirect
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Integration from "./components/Integration";
import Dashboard from "./components/Dashboard";
import TwilioIntegration from "./components/TwilioIntegration";
import SetTwilioDetails from "./components/SetTwilioDetails";
import TermsOfUse from './modals/TermsofUse';

 class App extends Component {
  state = {
    isUserSignedIn: false,
    accessToken: '',
    emailID: '',
    redirect : false 
  }
  constuctor() {
   // this.routeChange = this.routeChange.bind(this);
  }
   componentDidMount() {
   // For testing purpose :  
   localStorage.clear()
    this.checkLocalSotrage();
  }
  /* routeChange(isUserSignedIn) {
    if(isUserSignedIn) {
      this.props.history.push(`/integration`);
    }else {
      this.props.history.push(`/termsofuse`);
    }
}*/
setRedirect = () => {
  this.setState({
    redirect: true
  })
}
renderRedirect = () => {
  if (this.state.redirect) {
    if (this.state.isUserSignedIn){
      console.log("App.js if");
      return <Redirect to='/integration' />
    }else {
      console.log("App.js else");
      return <Redirect to ='/' />
    }
    
  }
}

   checkLocalSotrage() {
    const emailID = localStorage.getItem('emailID');
    const accessToken = localStorage.getItem('accessToken');
    console.log('emailID',emailID);
    const isUserSignedIn = (emailID!== null && emailID!== '') ? true  : false;
    console.log('isUserSignedIn',isUserSignedIn);
    this.setState({ emailID : emailID, accessToken:accessToken , isUserSignedIn : isUserSignedIn});
    console.log("Email ID", emailID);
   //this.routeChange(isUserSignedIn);
   this.setRedirect();
  }  

  render() {
    console.log("isUserSignedIn", this.state.isUserSignedIn);
    return (
      <Router>
           <div className ="App">
           {this.renderRedirect()}
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

export default App


