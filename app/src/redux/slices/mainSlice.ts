import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	IMainReducer,
	IReminder,
	IStartRecordPayload,
	PaneType,
	WaterLevel,
} from "../../ts/interfaces/main_interfaces";

const initialState: IMainReducer = {
	selectedPane: "Start",
	liters_per_cup: -1,
	no_of_drinked_cups: -1,
	reminder: null,
	recordDate: null,
	water_level: "0%",
};

const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
		setSelectedPane: (
			state: IMainReducer,
			{ payload: pane }: PayloadAction<PaneType>
		) => {
			state.selectedPane = pane;
		},
		setLitersPerCup: (
			state: IMainReducer,
			{ payload: litersPerCup }: PayloadAction<number>
		) => {
			state.liters_per_cup = litersPerCup;
		},
		setNumberOfDrinkedCups: (
			state: IMainReducer,
			{ payload: numberOfDrinkedCups }: PayloadAction<number>
		) => {
			state.no_of_drinked_cups = numberOfDrinkedCups;
		},
		incrementNumberOfDrinkedCups: (state: IMainReducer) => {
			state.no_of_drinked_cups = state.no_of_drinked_cups + 1;
		},
		setWaterLevel: (
			state: IMainReducer,
			{ payload: waterLevel }: PayloadAction<WaterLevel>
		) => {
			state.water_level = waterLevel;
		},
		setReminder: (
			state: IMainReducer,
			{ payload: reminder }: PayloadAction<IReminder | null>
		) => {
			state.reminder = reminder;
		},
		startRecord: (
			state: IMainReducer,
			{ payload: startRecordPayload }: PayloadAction<IStartRecordPayload>
		) => {
			state.no_of_drinked_cups = 0;
			state.selectedPane = "Drink";
			state.liters_per_cup = startRecordPayload.liters_per_cup;
			state.recordDate = new Date().toLocaleDateString();

			if (startRecordPayload.hours || startRecordPayload.minutes) {
				state.reminder = {
					hours: startRecordPayload.hours,
					minutes: startRecordPayload.minutes,
				};
			} else {
				state.reminder = null;
			}
		},
		resetMainSlice: () => initialState,
	},
});

export const MainReducer = mainSlice.reducer;
export const {
	setSelectedPane,
	setLitersPerCup,
	setNumberOfDrinkedCups,
	setReminder,
	startRecord,
	setWaterLevel,
	resetMainSlice,
	incrementNumberOfDrinkedCups,
} = mainSlice.actions;
