import { createSlice } from "@reduxjs/toolkit";
import { formatQuestion } from "../../utils/Util";

const initialState = {
  users: {},
  questions: {},
  isAuthenticated: false,
  authenticatedUser: "",
  isLoading:true,
};

const VoteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    populateData(state, action) {
      state.users = action.payload.users;
      state.questions = action.payload.questions;
      state.isLoading = false;
    },
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.authenticatedUser = action.payload.userID;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.authenticatedUser = "";
    },
    saveQuestionAnswer: (state, action) => {
      const users = state.users;
      const questions = state.questions;
      const authedUser = action.payload.authedUser;
      const qid = action.payload.qid;
      const answer = action.payload.answer;
      state.users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };
      state.questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    },
    saveQuestion: (state, action) => {
      const users = state.users;
      let questions = state.questions;
      const question = action.payload.question;

      const authedUser = question.author;
      const formattedQuestion = formatQuestion(question);
      state.questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      questions = state.questions;
      state.users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };
    },
  },
});

export const {
  populateData,
  loginUser,
  logoutUser,
  saveQuestionAnswer,
  saveQuestion,
} = VoteSlice.actions;

export default VoteSlice.reducer;
