import { Menu, MenuItem, WebContents } from "electron";
import { Delay } from "../../utils/utils";
import { createThemesSubMenu } from "./Shared";

const createRecordsSubMenu = (webContents: WebContents) => {
	const recordsMenu = Menu.buildFromTemplate([
		{
			label: "Progress",
			click: () => {
				webContents.send("records_progress");
			},
		},
		{
			label: "List",
			click: () => {
				webContents.send("records_list");
			},
		},
	]);
	const recordsSubMenu = new MenuItem({
		label: "Records",
		submenu: recordsMenu,
	});
	return recordsSubMenu;
};

const createLogoutItem = (webContents: WebContents) => {
	const logoutItem = new MenuItem({
		label: "Logout",
		click: async () => {
			webContents.send("logout");
		},
	});
	return logoutItem;
};

const createHomeItem = (webContents: WebContents) => {
	const homeItem = new MenuItem({
		label: "Home",
		click: () => {
			webContents.send("go_home");
		},
	});

	return homeItem;
};

export const setupAuthenticatedMenu = (webContents: WebContents) => {
	const authMenu = new Menu();
	authMenu.append(createHomeItem(webContents));
	authMenu.append(createRecordsSubMenu(webContents));
	authMenu.append(createThemesSubMenu(webContents));
	authMenu.append(createLogoutItem(webContents));
	Menu.setApplicationMenu(authMenu);
};
