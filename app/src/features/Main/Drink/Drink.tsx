import { createNewRecord } from "../../../api/record";
import Button from "../../../components/Button/Button";
import { selectNumberOfDrinkedCups } from "../../../redux/selectors/mainSelectors";
import { resetMainSlice } from "../../../redux/slices/mainSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import ReminderService from "../../../services/RedminerService";
import WaterService from "../../../services/WaterService";
import { ButtonsFlex, DrinkContainer, NumberOfCupsFlex } from "./Drink.styles";

type Props = {};

const Drink = (props: Props) => {
	const numberOfDrinkedCups = useAppSelector(selectNumberOfDrinkedCups);
	const Dispatch = useAppDispatch();
	return (
		<DrinkContainer>
			<NumberOfCupsFlex>
				<span>Cups : </span> <span>{numberOfDrinkedCups}</span>
			</NumberOfCupsFlex>
			<ButtonsFlex>
				<Button
					clickHandler={() => {
						WaterService.DrinkCup();
					}}
					drinkButton
				>
					Drink
				</Button>
				<Button
					clickHandler={() => {
						Dispatch(resetMainSlice());
					}}
				>
					Start Over
				</Button>
				<Button
					clickHandler={() => {
						createNewRecord().then(() => {
							Dispatch(resetMainSlice());
							ReminderService.unsetReminder();
						});
					}}
				>
					Save And Start Over
				</Button>
			</ButtonsFlex>
		</DrinkContainer>
	);
};

export default Drink;
