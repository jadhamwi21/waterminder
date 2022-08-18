import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signupUser } from "../../api/signup";
import { useAppDispatch } from "../../redux/store";

const signupSchema = yup.object().shape({
	firstname: yup.string().required(),
	lastname: yup.string().required(),
	username: yup.string().required(),
	password: yup.string().required(),
});

const initialValues = {
	firstname: "",
	lastname: "",
	username: "",
	password: "",
};

export const useSignupForm = () => {
	const Navigate = useNavigate();
	const { handleChange, errors, handleSubmit } = useFormik({
		validationSchema: signupSchema,
		onSubmit: (values) => {
			signupUser(values).then(() => {
				Navigate("/login");
			});
		},
		initialValues,
	});

	return { handleChange, errors, handleSubmit };
};
