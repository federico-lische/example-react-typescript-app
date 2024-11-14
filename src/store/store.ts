import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../views/Users/store/usersSlice";

const rootReducer = combineReducers({
		users: usersReducer,
});					

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore["dispatch"];

// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
