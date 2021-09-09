import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import HomePage from '../pages/HomePage';
import NewPool from'../pages/NewPoolPage';
import LeaderBoardPage from '../pages/LeaderBoardPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PoolQuestionPage from '../pages/PoolQuestionPage';
import PoolResultPage from '../pages/PoolResultPage';

import history from "./history";

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute  path="/" component={LoginPage} exact/>
        <PrivateRoute path="/home" component={HomePage} exact/>
        <PrivateRoute path="/leaderboard" component={LeaderBoardPage} exact/>
        <PrivateRoute path="/newpool" component={NewPool} exact/>
        <PrivateRoute path="/poolquestion/:questionId" component={PoolQuestionPage}/>
        <PrivateRoute path="/poolresult/:questionId" component={PoolResultPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
  </Router>
);

export default AppRouter;
