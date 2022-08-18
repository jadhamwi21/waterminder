import { ICustomWindow } from "../ts/interfaces/window_interfaces";

declare const window: ICustomWindow;

export default class MenuService {
	public static SetupDefaultMenu() {
		window.electronApi.menuApi.setDefaultMenu();
	}

	public static SetupAuthenticatedMenu() {
		window.electronApi.menuApi.setAuthenticatedMenu();
	}
}
