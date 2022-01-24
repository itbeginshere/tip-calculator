import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
