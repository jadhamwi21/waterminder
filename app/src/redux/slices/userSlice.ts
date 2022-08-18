import { createSlice } from "@reduxjs/toolkit";
import { IUserReducer } from "../../ts/interfaces/user_interfaces";
import { loginThunk } from "../thunks/login";

const initialState: IUserReducer = {
	access_token: null,
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		resetUserSlice: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
			state.access_token = payload;
			state.isAuthenticated = true;
		});
		builder.addCase(loginThunk.rejected, (state) => {
			state.access_token = null;
			state.isAuthenticated = false;
		});
	},
});

export const UserReducer = userSlice.reducer;

export const { resetUserSlice } = userSlice.actions;
