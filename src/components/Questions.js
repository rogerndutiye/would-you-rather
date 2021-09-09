
import { useState } from 'react';
import AnsweredQuestions from './AnsweredQuestions';
import UnansweredQuestions  from './UnansweredQuestions';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoCodeWorkingSharp } from "react-icons/io5";
import PropTypes from 'prop-types';

const Questions = ({userData}) =>{
    const [active, setActive] = useState(1);

    const tabItems = [
      {
        id: 1,
        title: 'Unanswered Questions',
        icon: <IoCodeWorkingSharp/>,
        content: <UnansweredQuestions key="UnansweredQuestions" unanswered={userData.currentUserQuestions.unanswered} />,
      },
      {
        id: 2,
        title: 'Answered Questions',
        icon: <IoCheckmarkDoneSharp/>,
        content: <AnsweredQuestions key="AnsweredQuestions" answered={userData.currentUserQuestions.answered}/>,
      }
    ];
    

    return (
        <div className="mx-auto w-4/12 shadow-2xl">
          <div className="tabs">
            {tabItems.map(({ id, icon, title }) =><TabItem
               key={title}
               icon={icon}
               title={title}
               onItemClicked={() => setActive(id)}
               isActive={active === id}
             />
          )}
          </div>
          <div className="content">
            {tabItems.map(({ id, content }) => {
              return active === id ? content : ''
            })}
          </div>
         </div>
    )
}


const TabItem = ({
    icon = '',
    title,
    onItemClicked = () => console.error('You passed no action to the component'),
    isActive = false,
  }) => {
    return (
      <div className={isActive ? 'tabitem border-b-4 border-green-500' : 'tabitem  border-b-4 border-gray-700 tabitem--inactive'} onClick={onItemClicked}>
        <i className={icon}></i>
        <div className="flex items-center text-gray-800">
        <span className="text-2xl  px-2"> {icon} </span>  {title}  </div>
      </div>
    )
  };

  Questions.propTypes = {
    userData: PropTypes.object.isRequired
  };
  
export default Questions;