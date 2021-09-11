import HeaderCard from "./UI/HeaderCard";
import { BiSend } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { getPercent } from "../utils/Util";
import PropTypes from 'prop-types';

const PoolResult = ({question,userVoted}) => {
  let history = useHistory();
  const optionOneVote = question.optionOne.votes.length;
  const optionTwoVote = question.optionTwo.votes.length;
  const totalVote = optionOneVote + optionTwoVote;
  const optionOneVotePercent = getPercent(
    question.optionOne.votes.length,
    totalVote
  );
  const optionTwoVotePercent = getPercent(
    question.optionTwo.votes.length,
    totalVote
  );
  const handleClick = () =>{
    history.replace("/");
  }

  return (
    <>
      <div className="mx-auto py-5 mt-2 w-4/12 shadow-2xl">
        <HeaderCard
          key={question.id}
          title={question.author}
          userId={question.author}
        >
          <div className="justify-center text-center">
            <h1 className="font-bold text-xl text-gray-700">Results</h1>
            <div className={userVoted ==='optionOne' ? 'border-2 border-green-500 bg-green-50 my-4 rounded-lg' : 'border-2 border-gray-500 bg-white my-4 rounded-lg'}>
            {userVoted ==='optionOne' && <div className="flex justify-end">
              <div className="bg-yellow-500 -mt-4 -mr-4 text-xs font-bold text-gray-100 leading-3 
            rounded-full h-11 w-11 flex items-center justify-center">Your Vote</div></div>}
             <div className="text-sm mt-2 text-gray-600  font-bold">{question.optionOne.text}</div> 
              <div className=" w-full bg-gray-100 mt-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-200 text-xs font-semibold py-1 text-center text-gray-90"
                  style={{ width: `${optionOneVotePercent}%` }}
                >
                  {optionOneVotePercent}%
                </div>
              </div>
              <div className="text-sm py-2  font-bold"> {optionOneVote} out of {totalVote} votes </div> 
            </div>


            <div className={userVoted ==='optionTwo' ? 'border-2 border-green-500 bg-green-50 my-4 rounded-lg' : 'border-2 border-gray-500 bg-white my-4 rounded-lg'}>
            {userVoted ==='optionTwo' && <div className="flex justify-end">
              <div className="bg-yellow-500 -mt-4 -mr-4 text-xs font-bold text-gray-100 leading-3 
            rounded-full h-11 w-11 flex items-center justify-center">Your Vote</div></div>}
             <div className="text-sm mt-2 text-gray-600  font-bold">{question.optionTwo.text}</div> 
              <div className=" w-full bg-gray-100 mt-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-200 text-xs font-semibold py-1 text-center text-gray-90"
                  style={{ width: `${optionTwoVotePercent}%` }}
                >
                  {optionTwoVotePercent}%
                </div>
              </div>
              <div className="text-sm py-2  font-bold"> {optionTwoVote} out of {totalVote} votes </div> 
            </div>
            <div className="flex justify-end">
            <button
                className="w-1/4 flex flex-row justify-end py-2 px-4 mt-5 border 
            border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-300"
            onClick={handleClick}
              >
                <span className="mt-1">
                  <BiSend />{" "}
                </span>{" "}
                <span>Back</span>
              </button>
            </div>

          </div>
        </HeaderCard>
      </div>
    </>
  );
};
PoolResult.propTypes = {
  question: PropTypes.object.isRequired,
  userVoted: PropTypes.string.isRequired
};
export default PoolResult;
