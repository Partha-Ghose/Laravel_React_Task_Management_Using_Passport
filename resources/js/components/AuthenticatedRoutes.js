// import React from "react";
// import { Route, Redirect, useNavigate } from "react-router-dom";
// import { publicUrl } from "./constant";

// function AuthenticatedRoutes({ component: Component, authed, ...rest }) {
//     const navigate = useNavigate();
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authed === true ? (
//           <Component {...props} exact={true} />
//         ) : (
//         //   <Redirect
//         //     to={{
//         //       pathname: `${publicUrl}login`,
//         //       state: { from: props.location },
//         //     }}
//         //   />
//           navigate(`${publicUrl}login`)
//         )
//       }
//     />
//   );
// }

// export default AuthenticatedRoutes;



import React from "react";
import { Navigate } from 'react-router-dom';
import { publicUrl } from './constant';
// import { useSelector } from 'react-redux';

// import { history } from '_helpers';

export { AuthenticatedRoutes };

// function AuthenticatedRoutes({ children }) {
//     const { user: authUser } = useSelector(x => x.auth);
    
//     if (!authUser) {
//         // not logged in so redirect to login page with the return url
//         return <Navigate to="/login" state={{ from: history.location }} />
//     }

//     // authorized so return child components
//     return children;
// }


const AuthenticatedRoutes = ({ isLoggIn, children }) => {
    console.log('isLoggIn is ', isLoggIn);
    if (!isLoggIn) {
      return <Navigate to={`${publicUrl}login`} replace />;
    }
  
    return children;
  };

//   export default AuthenticatedRoutes;