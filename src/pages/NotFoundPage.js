import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../assets/images/404.gif';

const NotFoundPage = () => {
  return  <div className="mx-auto my-10 w-10/12 flex flex-col justify-center self-center items-center ">

   404  <Link to="/home">Go home</Link>
   <Link to="/home"><img src={img404} alt="404" /></Link>
  </div>
}

export default NotFoundPage;
