import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAppDispatch } from "../../redux/store";
import { loginThunk } from "../../redux/thunks/login";

const loginSchema = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required(),
});

const initialValues = {
	username: "",
	password: "",
};

export const useLoginForm = () => {
	const Navigate = useNavigate();
	const Dispatch = useAppDispatch();
	const { handleChange, errors, handleSubmit } = useFormik({
		validationSchema: loginSchema,
		onSubmit: (values) => {
			Dispatch(loginThunk(values))
				.unwrap()
				.then(() => {
					Navigate("/main");
				});
		},
		initialValues,
	});

	return { handleChange, errors, handleSubmit };
};
