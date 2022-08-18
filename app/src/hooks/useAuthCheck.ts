import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectReminder } from "../redux/selectors/mainSelectors";
import { selectIsAuthenticated } from "../redux/selectors/userSelectors";
import { useAppSelector } from "../redux/store";
import MenuService from "../services/MenuService";
import ReminderService from "../services/RedminerService";

export const useAuthCheck = () => {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const [initialLoading, setInitialLoading] = useState(true);
	const navigate = useNavigate();
	const reminder = useAppSelector(selectReminder);
	const location = useLocation();
	useEffect(() => {
		if (isAuthenticated) {
			if (reminder) {
				ReminderService.setReminder(reminder.hours, reminder.minutes);
			}
			if (
				location.pathname === "/login" ||
				location.pathname === "/signup" ||
				location.pathname === "/"
			) {
				navigate("/main");
			}
		} else {
			navigate("/");
		}
		setTimeout(() => {
			setInitialLoading(false);
		}, 1000);
	}, []);

	return { initialLoading };
};
