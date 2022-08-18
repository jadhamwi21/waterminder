export interface IRecord {
	liters_per_cup: number;
	cups: number;
	timestamp: string;
}

export interface IRecordProcessed {
	liters: number;
	timestamp: string;
}
