import { loginUser, logoutUser, populateData } from "../data/store/voteSlice";
import { _getUsers, _getQuestions } from "../data/_DATA";

export const fetchData = () => {
  return async (dispatch) => {
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(
        populateData({
          users: users,
          questions: questions,
        })
      );
    });
  };
};

export const userLogin = (frmData) => {
  return async (dispatch) => {
    const userID = frmData.userID;
    dispatch(loginUser({ userID }));
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch(logoutUser());
  };
};

export function getUserDetails(users, userId) {
  return users[userId];
}

export function getUserQuestionDetails(users, questions, userId) {
  const answeredIds = Object.keys(users[userId].answers);

  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    currentUserQuestions: {
      answered,
      unanswered,
    },
  };
}
