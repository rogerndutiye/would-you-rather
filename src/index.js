import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import store from "./data/store/index";

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
     <AppRouter />
     </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

