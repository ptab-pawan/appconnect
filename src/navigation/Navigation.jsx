import React , {Component} from "react";
import '../App.css';
import { GoogleLogout } from 'react-google-login';
import {
    Redirect
  } from "react-router-dom";
  import googleClientId from '../config';

 class Nav  extends Component{
    state = {
        redirect: false
      };
      setRedirect = () => {
        console.log("setRedirect");
        this.setState({
          redirect: true
        })
      }
      routeChange = () => {
        if (this.state.redirect) {
            return <Redirect to ='/' />
        }
      }
    render() {
        const logout = (response) => {
            console.log(response);
            //clear local storage
            localStorage.clear()
            this.setRedirect();
        }
    return (
        <nav >
             {this.routeChange()}
            <h3>IBM App Connect</h3>
            <h4> John Doe</h4>
            <GoogleLogout
                clientId= "783846295086-uetrevvm3t5hmcsjdt4m9amlpfl7lh7f.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
            </GoogleLogout>
        </nav>
    );
  }
}

export default Nav;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Integration from "../components/Integration";
// import TwilioIntegration from "../components/TwilioIntegration";
// // import Dashboard from "../components/Dashboard";
// import SetTwilioDetails from "../components/SetTwilioDetails";
// import Login from "../components/Login";

// // Some folks find value in a centralized route config.
// // A route config is just data. React is great at mapping
// // data into components, and <Route> is a component.

// // Our route config is just an array of logical "routes"
// // with `path` and `component` props, ordered the same
// // way you'd do inside a `<Switch>`.
// const routes = [
//   {
//     path: "/",
//     component: Login
//   },
//   {
//     path: "/integration",
//     component: Integration
//   },
//   {
//     path: "/dashboard",
//     component: Dashboard,
//     routes: [
//       {
//         path: "/dashboard/twilio",
//         component: TwilioIntegration
//       },
//       {
//         path: "/dashboard/setdetails",
//         component: SetTwilioDetails
//       }
//     ]
//   }
// ];

// export default function RouteConfig() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/integration">Integration</Link>
//           </li>
//         </ul>

//         <Switch>
//           {routes.map((route, i) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // A special wrapper for <Route> that knows how to
// // handle "sub"-routes by passing them in a `routes`
// // prop to the component it renders.
// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

// function Dashboard({ routes }) {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <ul>
//         <li>
//           <Link to="/dashboard/twilio">twilio</Link>
//         </li>
//         <li>
//           <Link to="/dashboard/setdetails">Set Details</Link>
//         </li>
//       </ul>

//       <Switch>
//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </Switch>
//     </div>
//   );
// }
