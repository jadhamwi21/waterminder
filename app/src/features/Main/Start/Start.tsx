import {
	FormControl,
	FormHelperText,
	FormLabel,
	NumberInput,
	NumberInputField,
} from "@chakra-ui/react";
import Button from "../../../components/Button/Button";
import ReminderPicker from "../../../components/ReminderPicker/ReminderPicker";
import { checkInvalid } from "../../../utils/utils";
import { useStart } from "./Start.func";
import { StartContainer } from "./Start.styles";

type Props = {};

const Start = (props: Props) => {
	const { handleChange, handleSubmit, errors, handleHoursAndMinutes, values } =
		useStart();
	return (
		<StartContainer>
			<FormControl
				width={"70%"}
				margin="0.5em"
				isRequired
				isInvalid={checkInvalid(errors.liters_per_cup)}
			>
				<FormLabel fontSize="15px">Liters Per Cup</FormLabel>
				<NumberInput value={values.liters_per_cup}>
					<NumberInputField onChange={handleChange} name="liters_per_cup" />
				</NumberInput>
				<FormHelperText>{errors.liters_per_cup}</FormHelperText>
			</FormControl>
			<ReminderPicker setHoursAndMinutes={handleHoursAndMinutes} />
			<Button clickHandler={handleSubmit}>Start</Button>
		</StartContainer>
	);
};

export default Start;
