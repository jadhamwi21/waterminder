interface IReminderAPI {
	sendNotification: (title: string, message: string) => void;
}

interface IMenuAPI {
	setDefaultMenu: () => void;
	setAuthenticatedMenu: () => void;
}

interface IThemeAPI {
	setupThemesListener: (lightCb: Function, darkCb: Function) => void;
}

interface IHomeAPI {
	setupHome: (goHome: Function) => void;
}

interface ILogoutAPI {
	setupLogout: (logoutHandler: Function) => void;
}

interface IRecordsAPI {
	setupRecords: (listCb: Function, progressCb: Function) => void;
}

export interface ICustomWindow extends Window {
	electronApi: {
		notificationApi: IReminderAPI;
		menuApi: IMenuAPI;
		themeApi: IThemeAPI;
		homeApi: IHomeAPI;
		logoutApi: ILogoutAPI;
		recordsApi: IRecordsAPI;
	};
}
