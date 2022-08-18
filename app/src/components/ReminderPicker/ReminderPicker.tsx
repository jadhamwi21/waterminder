import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Hours, Minutes } from "../../constants/durations";

type Props = {
	setHoursAndMinutes: (hours: number | null, minutes: number | null) => void;
};

const ReminderPicker = ({ setHoursAndMinutes }: Props) => {
	const [hours, setHours] = useState("");
	const [minutes, setMinutes] = useState("");
	useEffect(() => {
		const hoursToSet = hours === "" ? null : parseInt(hours);
		const minutesToSet = minutes === "" ? null : parseInt(minutes);
		setHoursAndMinutes(hoursToSet, minutesToSet);
	}, [hours, minutes]);
	return (
		<FormControl width={"70%"} margin="0.5em">
			<FormLabel fontSize="15px">Remind Me Every</FormLabel>
			<Select
				variant="outline"
				margin="1em 0px"
				value={hours}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					if (e.target.value === "Hours") {
						setHours(null);
					} else {
						setHours(e.target.value);
					}
				}}
			>
				{Hours.map((hour) => (
					<option
						value={hour}
						key={`hour-${hour}`}
						style={{ backgroundColor: "var(--white)" }}
					>
						{hour}
					</option>
				))}
			</Select>
			<Select
				variant="outline"
				value={minutes}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					if (e.target.value === "Minutes") {
						setMinutes(null);
					} else {
						setMinutes(e.target.value);
					}
				}}
			>
				{Minutes.map((minute) => (
					<option
						value={minute}
						key={`minute-${minute}`}
						style={{ backgroundColor: "var(--white)" }}
					>
						{minute}
					</option>
				))}
			</Select>
		</FormControl>
	);
};

export default ReminderPicker;
