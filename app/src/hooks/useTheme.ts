import { useEffect } from "react";
import { selectTheme } from "../redux/selectors/themeSelectors";
import { setDarkTheme, setLightTheme } from "../redux/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { ICustomWindow } from "../ts/interfaces/window_interfaces";

declare const window: ICustomWindow;

export const useTheme = () => {
	const theme = useAppSelector(selectTheme);
	useEffect(() => {
		if (theme === "Light") {
			document.documentElement.style.setProperty("--white", "#ffffff");
			document.documentElement.style.setProperty("--black", "#1a1a1a");
			document.documentElement.style.setProperty(
				"--chakra-colors-chakra-body-text",
				"#1a1a1a"
			);
		} else {
			document.documentElement.style.setProperty("--black", "#ffffff");
			document.documentElement.style.setProperty("--white", "#1a1a1a");
			document.documentElement.style.setProperty(
				"--chakra-colors-chakra-body-text",
				"#ffffff"
			);
		}
	}, [theme]);
};
