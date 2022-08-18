import React, { useEffect, useReducer, useState } from "react";
import { getRecords } from "../api/record";
import { mergeRecordsDates } from "../features/Records/Records.func";
import { IRecordProcessed } from "../ts/interfaces/record_interfaces";
import { Delay } from "../utils/utils";

type SortType = "By Date" | "By Liters";

interface IRecordsReducerState {
	loading: boolean;
	records: IRecordProcessed[] | null;
}

interface IAction {
	type: "FETCH" | "SET";
	payload?: any;
}

const sortByDate = (records: IRecordProcessed[]) => {
	const tempRecords = [...records];
	tempRecords.sort((rec1, rec2) => {
		return (
			new Date(rec2.timestamp).getTime() - new Date(rec1.timestamp).getTime()
		);
	});
	return tempRecords;
};
const sortByLiters = (records: IRecordProcessed[]) => {
	const tempRecords = [...records];
	tempRecords.sort((rec1, rec2) => {
		return rec2.liters - rec1.liters;
	});
	return tempRecords;
};

const recordsReducer: React.Reducer<IRecordsReducerState, IAction> = (
	_,
	action
) => {
	switch (action.type) {
		case "FETCH":
			return { loading: true, records: null };
		case "SET": {
			return { loading: false, records: action.payload.records };
		}
	}
};

export const useRecords = () => {
	const [sort, setSort] = useState<SortType>("By Date");
	const [{ loading, records }, dispatch] = useReducer(recordsReducer, {
		loading: true,
		records: null,
	});
	useEffect(() => {
		dispatch({ type: "FETCH" });
		getRecords().then((records) => {
			dispatch({
				type: "SET",
				payload: { records: mergeRecordsDates(records) },
			});
		});
	}, []);
	useEffect(() => {
		if (records) {
			dispatch({ type: "FETCH" });
			Delay(1).then(() => {
				if (sort === "By Date") {
					dispatch({ type: "SET", payload: { records: sortByDate(records) } });
				}
				if (sort === "By Liters") {
					dispatch({
						type: "SET",
						payload: { records: sortByLiters(records) },
					});
				}
			});
		}
	}, [sort]);
	const sortChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSort(e.target.value as SortType);
	};

	return { loading, records, sort, sortChangeHandler };
};
