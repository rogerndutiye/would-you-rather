import {React} from 'react';
import { Route, Redirect } from 'react-router-dom';
import MasterLayout from '../components/UI/MasterLayout';
import {useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.vote.isAuthenticated);

  return <Route {...rest} component={(props) => (
    isLoggedIn ? (
    <MasterLayout>
    <Component {...props} />
    </MasterLayout>
) : (
    <Redirect to="/" />
  )
  )} />
  };



export default PrivateRoute;


