import PropTypes from 'prop-types';
const LeaderBoardList = ({user}) => {
  return (
      <div className="flex bg-white shadow-2xl mb-4 border border-gray-300 rounded p-3">
        <div className="w-3/12">
          <img
            className="object-center bg-yellow-300 "
            src={user.avatarURL}
            alt={user.name}
          />
        </div>
        <div className="w-7/12 pl-5 border-l border-r border-gray-300">
          <h1 className="font-bold text-lg text-gray-600"> {user.name} </h1>
          <div className="flex justify-between px-2 py-4 ">
            <div> Answered Questions </div>
            <div> {user.answerCount} </div>
          </div>
          <hr />

          <div className="flex justify-between px-2 py-4 ">
            <div> Created Questions</div>
            <div> {user.questionCount} </div>
          </div>
        </div>
        <div className="w-2/12 flex flex-col px-2 text-center items-center justify-center">
          <div className="bg-gray-300 font-bold text-sm p-2 "> Score </div>
          <div className="mt-5 bg-green-600 text-white text-bold text-xl rounded-full h-10 w-10 flex items-center justify-center">
            {user.score}
          </div>
        </div>
      </div>
  );
};

LeaderBoardList.propTypes = {
  user: PropTypes.object.isRequired
};
export default LeaderBoardList;
