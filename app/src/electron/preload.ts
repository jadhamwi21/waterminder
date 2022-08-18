const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronApi", {
	notificationApi: {
		sendNotification: (title: string, message: string) => {
			ipcRenderer.send("notify", title, message);
		},
	},
	menuApi: {
		setDefaultMenu: () => {
			ipcRenderer.send("default_menu");
		},
		setAuthenticatedMenu: () => {
			ipcRenderer.send("authenticated_menu");
		},
	},
	themeApi: {
		setupThemesListener: (lightThemeCb: Function, darkThemeCb: Function) => {
			ipcRenderer.on("light_theme", () => {
				lightThemeCb();
			});
			ipcRenderer.on("dark_theme", () => {
				darkThemeCb();
			});
		},
	},
	homeApi: {
		setupHome: (cb: Function) => {
			ipcRenderer.on("go_home", () => {
				cb();
			});
		},
	},
	logoutApi: {
		setupLogout: (cb: Function) => {
			ipcRenderer.on("logout", () => {
				cb();
			});
		},
	},
	recordsApi: {
		setupRecords: (listCb: Function, progressCb: Function) => {
			ipcRenderer.on("records_list", () => {
				listCb();
			});
			ipcRenderer.on("records_progress", () => {
				progressCb();
			});
		},
	},
});
