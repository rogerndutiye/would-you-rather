import { useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import PoolQuestion from '../components/PoolQuestion';
import PoolResult from '../components/PoolResult';

const QuestionsPage = () => {
  const questions = useSelector((state) => state.vote.questions);
  const users = useSelector((state) => state.vote.users);
  const userId = useSelector((state) => state.vote.authenticatedUser);

  const params = useParams();
  const { questionId } = params;
  const question = questions[questionId];
  if(!question){
    return <NotFoundPage/>
  }

  const user = users[userId];
  const userHaveVoted = user.answers[question.id];
  if(userHaveVoted)
  {
    return <PoolResult question={question} userVoted={userHaveVoted} />
  }else{
    return <PoolQuestion question={question} />
  }
};

export default QuestionsPage;
