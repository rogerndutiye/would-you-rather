import { AiOutlineFolderAdd } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { BiSend } from "react-icons/bi";
import { saveQuestion } from "../data/store/voteSlice";
import { useHistory } from "react-router-dom";

const NewPool = () => {
  let history = useHistory();
  const optionOneTextRef = useRef();
  const optionTwoTextRef = useRef();
  const dispatch = useDispatch();
  const author = useSelector((state) => state.vote.authenticatedUser);

  const [invalidForm, setInvalidForm] = useState(true);

  const handleOnChange = (e) => {
    const isFormValid =
      optionOneTextRef.current.value === "" ||
      optionTwoTextRef.current.value === ""
        ? true
        : false;
    setInvalidForm(isFormValid);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const optionOneText = optionOneTextRef.current.value;
    const optionTwoText = optionTwoTextRef.current.value;

    const question = {
      optionOneText,
      optionTwoText,
      author,
    };
    dispatch(saveQuestion({ question}));
    history.replace("/");
  };

  return (
    <div className="mx-auto mt-10 w-4/12 shadow-2xl">
      <div className=" bg-blue-200 py-1 border-b-4 border-blue-500">
        <div className="flex font-bold justify-center text-gray-800">
          <span className="text-2xl  px-2">
            {" "}
            <AiOutlineFolderAdd />
          </span>{" "}
          Create New Question{" "}
        </div>
      </div>
      
      <div className="p-10">
      <form onSubmit={handleOnSubmit}>
        <h3 className="pb-5  ">Complete the question</h3>
        <label
          className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Would you rather ....
        </label>

        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border 
      border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-300"
          type="text"
          placeholder="Enter Option One Text Here"
          ref={optionOneTextRef}
          onChange={handleOnChange}
        />

        <div className="flex mx-auto my-1">
          <div className="w-5/12 mt-3">
            <hr />
          </div>
          <div className="w-1/12 text-center">
            <span>or</span>
          </div>
          <div className="w-5/12 mt-3">
            <hr />
          </div>
        </div>

        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border 
      border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-300"
          type="text"
          placeholder="Enter Option Two Text Here"
          ref={optionTwoTextRef}
          onChange={handleOnChange}
        />

        <button
          className="mt-3 disabled:opacity-50 w-1/2 mx-auto flex flex-row justify-center py-2 px-4 border 
            border-transparent text-sm font-medium rounded-md text-white bg-blue-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={invalidForm}
        >
          <span className="mt-1">
            <BiSend />{" "}
          </span>{" "}
          <span>Submit</span>
        </button>
        </form>
      </div>
    </div>
  );
};

export default NewPool;
