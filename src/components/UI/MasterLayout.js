import { useDispatch } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import {Link,NavLink,useHistory} from "react-router-dom";
import {useSelector} from 'react-redux';
import {getUserDetails,userLogout} from '../../services/ApiService'
import PropTypes from 'prop-types';
import appLogo from '../../assets/images/Udacity_logo.svg'

const navigation = [
  { name: "Home", href: "home", current: true },
  { name: "New Poll", href: "newpool", current: false },
  { name: "Leader Board", href: "leaderboard", current: false },
];




const MasterLayout = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.vote.users);
  const userId = useSelector((state) => state.vote.authenticatedUser);
  const currentUserDetails=getUserDetails(users,userId);
  
  const logoutHandle = () => {
    dispatch(userLogout());
    history.replace('/');
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 bg-white sm:px-6 lg:px-8 border-b-2 border-green-600 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/home">
                <img
                  className="lg:block h-8 w-auto"
                  src={appLogo}
                  alt="App logo"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    to={`/${item.href}`}
                    activeClassName="bg-green-200"
                    key={item.href}
                    className="hover:bg-green-200 hover:text-gray-800 
                    px-3 py-2 rounded-sm text-sm font-medium text-gray-800"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span className="mx-3">Hello, {currentUserDetails.name} </span>
            <img
              className="h-8 w-8 rounded-full"
              src={currentUserDetails.avatarURL}
              alt=""
            />

            <button onClick={logoutHandle} className="flex items-center pl-10">
              <span className="mr-2">Logout</span>
              <HiOutlineLogout className="h-6 w-6" aria-hidden="true" />
             
            </button>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};
MasterLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MasterLayout;
