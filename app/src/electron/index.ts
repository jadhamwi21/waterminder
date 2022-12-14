import { app, BrowserWindow, ipcMain, Menu, Notification } from "electron";
import isDev from "electron-is-dev";
import { setupAuthenticatedMenu } from "./Menu/Authenticated";
import { setupDefaultMenu } from "./Menu/Default";
// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
	app.quit();
}

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const createWindow = (): BrowserWindow => {
	const mainWindow = new BrowserWindow({
		height: 800,
		width: 800,
		center: true,
		webPreferences: {
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
			contextIsolation: true,
		},
	});
	if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	return mainWindow;
};

let mainWindow: BrowserWindow;

app.on("ready", () => {
	mainWindow = createWindow();
	app.setAppUserModelId("Waterminder");
	Menu.setApplicationMenu(null);
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

app.whenReady().then(() => {
	ipcMain.on("notify", (_, title: string, message: string) => {
		new Notification({
			title,
			body: message,
			silent: true,
		}).show();
	});

	ipcMain.on("default_menu", () => {
		setupDefaultMenu(mainWindow.webContents);
	});

	ipcMain.on("authenticated_menu", () => {
		setupAuthenticatedMenu(mainWindow.webContents);
	});
});
