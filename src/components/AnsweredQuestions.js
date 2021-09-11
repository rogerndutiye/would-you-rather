import HeaderCard from "../components/UI/HeaderCard";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AnsweredQuestions = ({answered}) => {
    return (
      <div>
  
        {answered.map(question =>(
          <HeaderCard
          key={question.id}
          title={question.author}
          userId={question.author}
        >
          <h5 className="font-bold text-sm text-gray-700"> Would you rather </h5>
          <p className="py-2 text-sm text-gray-400">  {question.optionOne.text} <br/> or ...?</p>
          <Link
           className="bg-gray-400 hover:bg-green-500 text-white text-sm  py-2 px-4 rounded"
            to={`/questions/${question.id}`}
          >
            View Pool
          </Link>
        </HeaderCard>
        ))}
        
  
        
      </div>
    );
  };
  AnsweredQuestions.propTypes = {
    answered: PropTypes.array.isRequired
  };
export default AnsweredQuestions;