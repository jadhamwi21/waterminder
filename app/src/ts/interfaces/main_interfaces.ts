export type PaneType = "Start" | "Drink";

export type WaterLevel = `${string}%`;

export interface IReminder {
	hours: number;
	minutes: number;
}

export interface IMainReducer {
	selectedPane: PaneType;
	liters_per_cup: number;
	reminder: null | IReminder;
	no_of_drinked_cups: number;
	water_level: WaterLevel;
	recordDate: string;
}

export interface IStartRecordPayload {
	liters_per_cup: number;
	hours: number;
	minutes: number;
}
