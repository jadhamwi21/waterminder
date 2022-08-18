import { Menu, MenuItem, WebContents } from "electron";

export const createThemesSubMenu = (webContents: WebContents) => {
	const themesMenu = Menu.buildFromTemplate([
		{
			label: "Light",
			click: () => {
				webContents.send("light_theme");
			},
		},
		{
			label: "Dark",
			click: () => {
				webContents.send("dark_theme");
			},
		},
	]);

	const themesSubMenu = new MenuItem({
		label: "Themes",
		submenu: themesMenu,
	});

	return themesSubMenu;
};
