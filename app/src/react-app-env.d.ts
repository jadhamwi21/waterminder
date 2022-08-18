/// <reference types="react-scripts" />
declare module "*.mp3";
declare module "*.png";

declare global {
	interface Window {
		electronAPI: {
			reminderAPI: IReminderAPI;
		};
	}
}
