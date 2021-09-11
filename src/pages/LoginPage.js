import { useState, useEffect } from "react";
import { fetchData, userLogin } from "../services/ApiService";
import { useDispatch, useSelector } from "react-redux";
import appLogo from "../assets/images/Udacity_logo.svg";
import { useHistory, useLocation } from "react-router-dom";
import { BiSend } from "react-icons/bi";
import SelectOption from '../components/UI/SelectOption';



const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isLoading  = useSelector(state => state.vote.isLoading);
  const users = useSelector((state) => state.vote.users);
  const formattedUser = Object.values(users).map((user) => ({
    id: user.id,
    name: user.name,
    avatar: user.avatarURL,
  }));
  const initial={
    id: 'defaultUser',
    name: "Select a user",
    avatar: "/images/user.jpeg",
    
  }
  formattedUser.unshift(initial);

  const [userID, setUserID] = useState("");
  const [userIndex, setuserIndex] = useState(0);
  const [invalidForm, setInvalidForm] = useState(true);

  const handleOnChange = (user) => {
    setUserID(user.id);
    const isFormValid = user.id === "defaultUser" ? true : false;
    setInvalidForm(isFormValid);

    const userIndex = formattedUser.findIndex(item => item.id === user.id);
    setuserIndex(userIndex)
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ userID }));
    history.replace(from);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm p-6 m-auto bg-white mt-20 text-gray-500 rounded-3xl shadow-xl">
        <div className="md:flex w-full">
          <div className="w-full py-0 px-5  pb-11 ">
            <div className="w-1/2 m-auto">
              <img
                src={appLogo}
                alt="Logo"
                className="object-contain md:object-scale-down ..."
              />
            </div>
            <h2 className="mt-5 text-center text-2xl font-extrabold text-gray-500">
              Would You Rather App
            </h2>
            {isLoading && <div className="spinner-6 -mt-0 m-auto "></div>}
           
            { !isLoading &&
            <div className="flex -mx-3 mt-5">
              <div className="w-full px-3 mb-5">
              <h5 className="mb-5 font-medium text-center  text-blue-400">Please sign in to continue</h5>
                <form onSubmit={handleOnSubmit}>
                  <div className="flex flex-col">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                   {formattedUser.length>1 && <SelectOption userIndex={userIndex} handleOnChange={handleOnChange} users={formattedUser}/>}
                    <button
                      className="disabled:opacity-50 w-1/2 mx-auto flex flex-row justify-center mt-10 py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-500"
                      disabled={invalidForm}
                    >
                      <span className="mt-1">
                        <BiSend />
                      </span>
                      <span>Sign in</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
