import { useSelector } from "react-redux";
import LeaderBoardList from '../components/LeaderBoardList';
const LeaderBoardPage = () => {
  const users = useSelector((state) => state.vote.users);
  const formattedUsers = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      score: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => b.score - a.score);


  return (
    <>
      <div className="mx-auto py-5 mt-2 w-5/12">
        <div>
          {formattedUsers.map(user => <LeaderBoardList key={user.id} user={user}/>)}
        </div>
      </div>
    </>
  );
};

export default LeaderBoardPage;
