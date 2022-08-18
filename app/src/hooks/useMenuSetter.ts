import { useEffect } from "react";
import { selectIsAuthenticated } from "../redux/selectors/userSelectors";
import { useAppSelector } from "../redux/store";
import MenuService from "../services/MenuService";

export const useMenuSetter = () => {
	const isAuth = useAppSelector(selectIsAuthenticated);
	console.log(isAuth);
	useEffect(() => {
		if (isAuth) {
			MenuService.SetupAuthenticatedMenu();
		} else {
			MenuService.SetupDefaultMenu();
		}
	}, [isAuth]);
};
