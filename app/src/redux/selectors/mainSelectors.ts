import { AppState } from "../store";

export const selectSelectedPane = (state: AppState) => state.Main.selectedPane;

export const selectNumberOfDrinkedCups = (state: AppState) =>
	state.Main.no_of_drinked_cups;

export const selectReminder = (state: AppState) => state.Main.reminder;

export const selectLitersPerCup = (state: AppState) =>
	state.Main.liters_per_cup;

export const selectWaterLevel = (state: AppState) => state.Main.water_level;

export const selectMainState = (state: AppState) => state.Main;
