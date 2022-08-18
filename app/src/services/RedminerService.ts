import { waterPourSound } from "../App";
import { ICustomWindow } from "../ts/interfaces/window_interfaces";

declare const window: ICustomWindow;

export default class ReminderService {
	private static ReminderIntervalId: NodeJS.Timer | null = null;
	public static setReminder(hours: number, minutes: number) {
		let totalDuration = 0;
		const HOURS_TO_MILLISECONDS = 3600000;
		const MINUTES_TO_MILLISECONDS = 60000;
		if (hours) {
			totalDuration += hours * HOURS_TO_MILLISECONDS;
		}
		if (minutes) {
			totalDuration += minutes * MINUTES_TO_MILLISECONDS;
		}

		if (totalDuration !== 0) {
			setInterval(() => {
				window.electronApi.notificationApi.sendNotification(
					"Reminder",
					"It's Time To Drink Water :D"
				);
				waterPourSound.play();
			}, totalDuration);
		}
	}

	public static unsetReminder() {
		if (this.ReminderIntervalId) {
			clearInterval(this.ReminderIntervalId);
		}
		this.ReminderIntervalId = null;
	}
}
