import { AppState, useAppSelector } from "../store";

export const selectTheme = (state: AppState) => state.Theme.theme;
