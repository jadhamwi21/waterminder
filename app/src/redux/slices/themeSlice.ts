import { createSlice } from "@reduxjs/toolkit";
import { IThemeReducer } from "../../ts/interfaces/theme_interfaces";

const initialState: IThemeReducer = {
	theme: "Light",
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setLightTheme: (state) => {
			state.theme = "Light";
		},
		setDarkTheme: (state) => {
			state.theme = "Dark";
		},
	},
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export const ThemeReducer = themeSlice.reducer;
