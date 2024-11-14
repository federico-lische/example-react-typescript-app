import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { RootState, AppThunk } from "../../../store/store";
import {
	getUsersService,
	addUserService,
	editUserService,
	deleteUserService,
} from "../../../services/userServices";

// Define the TS type for the user slice's state
type User = {
	id: number;
	name: string;
	email: string;
	username: string;
};

interface UsersState {
	users: User[];
	isLoading: boolean;
	isError: boolean;
}

const initialState: UsersState = {
	users: [],
	isLoading: false,
	isError: false,
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		hasError: (state, action) => {
			state.isError = action.payload;
			state.isLoading = false;
		},
		listUsers: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.users = action.payload;
			state.isLoading = false;
		},
		createUser: (state, action: PayloadAction<User>) => {
			state.users.push(action.payload);
			state.isLoading = false;
		},
		editUser: (state, action: PayloadAction<User>) => {
			const index = state.users.findIndex(
				(user) => user.id === action.payload.id
			);
			state.users[index] = action.payload;
			state.isLoading = false;
		},
		removeUser: (state, action: PayloadAction<number>) => {
			state.users = state.users.filter((user) => user.id !== action.payload);
			state.isLoading = false;
		},
	},
});

export const fetchUsers = (): AppThunk => async (dispatch) => {
	dispatch(startLoading());
	try {
		const users = await getUsersService();
		dispatch(listUsers(users));
	} catch (error) {
		console.error("Failed to fetch users:", error);
		if (error instanceof Error) {
			dispatch(hasError(error.message));
		} else {
			dispatch(hasError("An unknown error occurred"));
		}
	}
};

export const createNewUser =
	(name: string, email: string, username: string): AppThunk =>
	async (dispatch) => {
		dispatch(startLoading());
		try {
			const newUser = await addUserService(name, email, username);
			dispatch(createUser(newUser));
			toast.success("User added successfully");
		} catch (error) {
			console.error("Failed to add user:", error);
			if (error instanceof Error) {
				dispatch(hasError(error.message));
				toast.error(error.message);
			} else {
				dispatch(hasError("An unknown error occurred"));
				toast.error("An unknown error occurred");
			}
		}
	};

export const updateUser =
	(id: number, name: string, email: string, username: string): AppThunk =>
	async (dispatch) => {
		dispatch(startLoading());
		try {
			const updatedUser = await editUserService(id, name, email, username);
			dispatch(editUser(updatedUser));
			toast.success("User updated successfully");
		} catch (error) {
			if (error instanceof Error) {
				dispatch(hasError(error.message));
				toast.error(error.message);
			} else {
				dispatch(hasError("An unknown error occurred"));
				toast.error("An unknown error occurred");
			}
		}
	};

export const deleteUser =
	(id: number): AppThunk =>
	async (dispatch) => {
		dispatch(startLoading());
		try {
			await deleteUserService(id);
			dispatch(removeUser(id));
			toast.success("User deleted successfully");
		} catch (error) {
			if (error instanceof Error) {
				dispatch(hasError(error.message));
				toast.error(error.message);
			} else {
				dispatch(hasError("An unknown error occurred"));
				toast.error("An unknown error occurred");
			}
		}
	};

// Export the slice reducer for use in the store configuration
export default usersSlice.reducer;
// Export the generated action creators for use in components
const { listUsers, createUser, editUser, removeUser, startLoading, hasError } =
	usersSlice.actions;
export { listUsers, createUser, editUser, removeUser, startLoading, hasError };

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectUserById = (state: RootState, userId: number) =>
	state.users.users.find((user) => user.id === userId);
