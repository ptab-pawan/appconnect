import React, {Component} from 'react'

export default class Dashboard  extends Component{

render() {
      
        return (
          <div className="Dashboard">
              <br/>
            <h3>Dashboard</h3>
             <br/>
             <br/>
             <br/>

          </div>
        );
      }
}

// function Dashboard({ routes }) {
//     return (
//       <div>
//         <h2>Dashboard</h2>
//         <ul>
//           <li>
//             <Link to="/dashboard/twilio">twilio</Link>
//           </li>
//           <li>
//             <Link to="/dashboard/setdetails">Set Details</Link>
//           </li>
//         </ul>
  
//         <Switch>
//           {routes.map((route, i) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Switch>
//       </div>
//     );
//   }
  
//   function Twilio() {
//     return <h3>Twilio</h3>;
//   }
  
//   function SetDetails() {
//     return <h3>Set Details</h3>;
//   }
