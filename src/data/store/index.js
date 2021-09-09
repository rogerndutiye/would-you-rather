import { configureStore } from "@reduxjs/toolkit";

import voteReducer from './voteSlice';

const store = configureStore({
	reducer: {
		vote: voteReducer
	},
});

export default store;