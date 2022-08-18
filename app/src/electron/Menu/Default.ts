import { Menu } from "electron";
import { createThemesSubMenu } from "./Shared";

export const setupDefaultMenu = (webContents: Electron.WebContents) => {
	const defaultMenu = Menu.buildFromTemplate([
		createThemesSubMenu(webContents),
	]);

	Menu.setApplicationMenu(defaultMenu);
};
