import HeaderCard from "./UI/HeaderCard";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { saveQuestionAnswer } from "../data/store/voteSlice";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';


const PoolQuestion = ({question}) => {
  let history = useHistory();
  const qid = question.id;
  const authedUser = useSelector((state) => state.vote.authenticatedUser);

  const dispatch = useDispatch();

  const [answer, setSnswer] = useState("");
  const [invalidForm, setInvalidForm] = useState(true);

  const handleOnChange = (e) => {
    setSnswer(e.target.value);
    const isFormValid = e.target.value === "" ? true : false;
    setInvalidForm(isFormValid);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(saveQuestionAnswer({ authedUser, qid, answer }));
    history.replace("/questions/" + qid);
  };

  return (
    <>
      <div className="mx-auto py-5 mt-2 w-4/12 shadow-2xl">
        <HeaderCard
          key={question.id}
          title={question.author}
          userId={question.author}
        >
          <div className="justify-center text-center">
            <h5 className="font-bold text-sm text-gray-700">
              {" "}
              Would you rather ...{" "}
            </h5>
            <form onSubmit={handleOnSubmit}>
              <div className="flex flex-col">
                <label className="inline-flex items-center mt-1">
                  <input
                    type="radio"
                    className="form-radio"
                    name="radioGroup"
                    value="optionOne"
                    onChange={handleOnChange}
                  />
                  <span className="ml-2">{question.optionOne.text} </span>{" "}
                  <br />
                </label>

                <label className="inline-flex items-center mt-1">
                  <input
                    type="radio"
                    className="form-radio"
                    name="radioGroup"
                    value="optionTwo"
                    onChange={handleOnChange}
                  />
                  <span className="ml-2"> {question.optionTwo.text} </span>
                </label>
              </div>

              <button
                className=" disabled:opacity-50 w-1/2 mx-auto flex flex-row justify-center py-2 px-4 border 
            border-transparent text-sm font-medium rounded-md text-white bg-blue-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={invalidForm}
              >
                <span className="mt-1">
                  <BiSend />{" "}
                </span>{" "}
                <span>Submit</span>
              </button>
            </form>
          </div>
        </HeaderCard>
      </div>
    </>
  );
};

PoolQuestion.propTypes = {
  question: PropTypes.object.isRequired
};
export default PoolQuestion;
