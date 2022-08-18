import {
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import BackLink from "../../components/BackLink/BackLink";
import Button from "../../components/Button/Button";
import Transition from "../../components/Transition/Transition";
import { FadeInOutVariants } from "../../constants/variants";
import { checkInvalid } from "../../utils/utils";
import { useLoginForm } from "./Login.func";
import { LoginFormContainer } from "./Login.styles";

type Props = {};

const Login = (props: Props) => {
	const { errors, handleChange, handleSubmit } = useLoginForm();
	return (
		<Transition variants={FadeInOutVariants}>
			<BackLink to="/" />
			<LoginFormContainer>
				<FormControl
					width={"50%"}
					margin="0.5em"
					isInvalid={checkInvalid(errors.username)}
					isRequired
				>
					<FormLabel fontSize="15px">Username</FormLabel>
					<Input type="text" onChange={handleChange} name={"username"} />
					<FormHelperText>{errors.username}</FormHelperText>
				</FormControl>
				<FormControl
					width={"50%"}
					margin="0.5em"
					isInvalid={checkInvalid(errors.password)}
					isRequired
				>
					<FormLabel fontSize="15px">Password</FormLabel>
					<Input type="password" onChange={handleChange} name={"password"} />
					<FormHelperText>{errors.password}</FormHelperText>
				</FormControl>
				<Button clickHandler={handleSubmit}>Login</Button>
			</LoginFormContainer>
		</Transition>
	);
};

export default Login;
