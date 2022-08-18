import WaterClick from "../assets/sounds/water-click.mp3";
import WaterPour from "../assets/sounds/water-pour.mp3";

export const checkInvalid = (value: string | undefined) => {
	return value !== undefined;
};

export const shouldToastBeCreatedFromThisObject = (value: any) => {
	return Object.entries(value).length !== 0 && typeof value === "object";
};

export const Delay = (s: number) => {
	return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

export const setupSounds = () => {
	const waterClickSound = new Audio(WaterClick);
	waterClickSound.load();
	waterClickSound.volume = 0.4;
	const waterPourSound = new Audio(WaterPour);
	waterPourSound.load();
	waterPourSound.volume = 0.4;
	return {
		waterClickSound,
		waterPourSound,
	};
};
