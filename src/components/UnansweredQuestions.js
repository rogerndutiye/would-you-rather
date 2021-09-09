import UserViewCard from "./UI/HeaderCard";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const UnansweredQuestions = ({unanswered}) => {
  return (
    <div>

      {unanswered.map(question =>(
        <UserViewCard
        key={question.id}
        title={question.author}
        userId={question.author}
      >
        <h5 className="font-bold text-sm text-gray-700"> Would you rather </h5>
        <p className="py-2 text-sm text-gray-400">  {question.optionOne.text} <br/> or ...?</p>
        <Link
          className="bg-gray-400 hover:bg-green-500 text-white text-sm  py-2 px-4 rounded"
          to={`/poolquestion/${question.id}`}
        >
          View Pool
        </Link>
      </UserViewCard>
      ))}
      

      
    </div>
  );
};
UnansweredQuestions.propTypes = {
  unanswered: PropTypes.array.isRequired
};
export default UnansweredQuestions;
