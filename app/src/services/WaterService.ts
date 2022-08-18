import { waterPourSound } from "../App";
import {
	incrementNumberOfDrinkedCups,
	setWaterLevel,
} from "../redux/slices/mainSlice";
import { store } from "../redux/store";
import { Delay } from "../utils/utils";

export default class WaterService {
	private static ReduxStore = store;

	public static FillCup() {
		waterPourSound.play();
		this.ReduxStore.dispatch(setWaterLevel("90%"));
	}

	public static async DrinkCup() {
		this.ReduxStore.dispatch(incrementNumberOfDrinkedCups());
		this.ReduxStore.dispatch(setWaterLevel("0%"));
		await Delay(1);
		this.ReduxStore.dispatch(setWaterLevel("90%"));
	}
}
