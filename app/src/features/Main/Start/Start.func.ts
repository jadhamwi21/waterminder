import { useFormik } from "formik";
import * as yup from "yup";
import { startRecord } from "../../../redux/slices/mainSlice";
import { useAppDispatch } from "../../../redux/store";
import ReminderService from "../../../services/RedminerService";
import WaterService from "../../../services/WaterService";

const startSchema = yup.object().shape({
	liters_per_cup: yup.string().required("liters per cup is a required field"),
	hours: yup.number().nullable(true),
	minutes: yup.number().nullable(true),
});

const initialValues = {
	liters_per_cup: "0.5",
	hours: null,
	minutes: null,
};

export const useStart = () => {
	const Dispatch = useAppDispatch();
	const { handleChange, errors, handleSubmit, setFieldValue, values } =
		useFormik({
			validationSchema: startSchema,
			onSubmit: (values) => {
				Dispatch(
					startRecord({
						...values,
						liters_per_cup: parseFloat(values.liters_per_cup),
					})
				);
				ReminderService.setReminder(values.hours, values.minutes);
				WaterService.FillCup();
			},
			initialValues,
		});

	const handleHoursAndMinutes = (hours: number, minutes: number) => {
		setFieldValue("hours", hours);
		setFieldValue("minutes", minutes);
	};

	return { handleChange, errors, handleSubmit, handleHoursAndMinutes, values };
};
