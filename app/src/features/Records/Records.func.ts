import {
	IRecord,
	IRecordProcessed,
} from "../../ts/interfaces/record_interfaces";

export const mergeRecordsDates = (records: IRecord[]) => {
	const newRecordsArray: IRecordProcessed[] = [];
	records.forEach((record) => {
		if (
			newRecordsArray.find(
				(currentRecord) => currentRecord.timestamp === record.timestamp
			)
		) {
			return;
		}
		const recordsToMergeWithCurrentRecord = records.filter(
			(currentRec) => record.timestamp === currentRec.timestamp
		);
		let totalLiters =
			recordsToMergeWithCurrentRecord[0].cups *
			recordsToMergeWithCurrentRecord[0].liters_per_cup;
		for (let i = 1; i < recordsToMergeWithCurrentRecord.length; i++) {
			totalLiters +=
				recordsToMergeWithCurrentRecord[i].cups *
				recordsToMergeWithCurrentRecord[i].liters_per_cup;
		}

		newRecordsArray.push({
			liters: totalLiters,
			timestamp: record.timestamp,
		});
	});
	return newRecordsArray;
};
