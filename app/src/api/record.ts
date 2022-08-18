import { axiosInstance } from "../configs/axios";
import { AppState, store } from "../redux/store";
import { IRecord } from "../ts/interfaces/record_interfaces";

export const createNewRecord = () => {
	const { Main }: AppState = store.getState();
	console.log(Main);
	const { liters_per_cup, recordDate, no_of_drinked_cups: cups } = Main;
	return axiosInstance.post("/record/record", {
		liters_per_cup,
		cups,
		timestamp: recordDate,
	});
};

export const getRecords = () => {
	return axiosInstance
		.get<any, { data: IRecord[] }>("/record/records")
		.then(({ data }) => data);
};
