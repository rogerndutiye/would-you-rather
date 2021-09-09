
import Questions from '../components/Questions';
import {useSelector} from 'react-redux';
import {getUserQuestionDetails} from '../services/ApiService'

const HomePage = () => {
   const questions = useSelector((state) => state.vote.questions);
   const users = useSelector((state) => state.vote.users);
   const authenticatedUser = useSelector((state) => state.vote.authenticatedUser);
   const userQuestionDetails=getUserQuestionDetails(users,questions,authenticatedUser);

   return <>
        <Questions userData={userQuestionDetails}/>
   </>
}

export default HomePage;