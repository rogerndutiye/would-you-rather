import {React} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector } from "react-redux";

 const PublicRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.vote.isAuthenticated);
  return <Route {...rest} component={(props) => (
    isLoggedIn ? (
      <Redirect to="/home" />
    ) : (
        <Component {...props} />
      )
  )} />
  };
export default PublicRoute;
