import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import posts from './Reducers/postsReducer'
import menuState from './Reducers/menuReducer';




export const store = configureStore({
  reducer: {
     posts,
      menuState
  },
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
