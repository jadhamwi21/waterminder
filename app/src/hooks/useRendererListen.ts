import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetMainSlice } from "../redux/slices/mainSlice";
import { setDarkTheme, setLightTheme } from "../redux/slices/themeSlice";
import { resetUserSlice } from "../redux/slices/userSlice";
import { useAppDispatch } from "../redux/store";
import { ICustomWindow } from "../ts/interfaces/window_interfaces";

declare const window: ICustomWindow;
export const useRendererListen = () => {
	const Dispatch = useAppDispatch();
	const Navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		window.electronApi.themeApi.setupThemesListener(
			() => {
				Dispatch(setLightTheme());
			},
			() => {
				Dispatch(setDarkTheme());
			}
		);
		window.electronApi.homeApi.setupHome(() => {
			Navigate("/main");
		});
		window.electronApi.logoutApi.setupLogout(() => {
			Dispatch(resetMainSlice());
			Dispatch(resetUserSlice());
			Navigate("/login");
		});

		window.electronApi.recordsApi.setupRecords(
			() => {
				Navigate("/records/list");
			},
			() => {
				Navigate("/records/progress");
			}
		);
	}, []);
};
