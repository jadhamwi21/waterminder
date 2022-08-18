import { AppState } from "../store";

export const selectAccessToken = (state: AppState) => state.User.access_token;
export const selectIsAuthenticated = (state: AppState) =>
	state.User.isAuthenticated;
export const selectUserState = (state: AppState) => state.User;
