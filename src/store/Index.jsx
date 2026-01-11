import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    profile: profileReducer,
  },
});
