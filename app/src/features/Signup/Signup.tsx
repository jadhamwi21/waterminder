import {
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import BackLink from "../../components/BackLink/BackLink";
import Button from "../../components/Button/Button";
import Transition from "../../components/Transition/Transition";
import Typography from "../../components/Typography/Typography";
import { FadeInOutVariants } from "../../constants/variants";
import { checkInvalid } from "../../utils/utils";
import { useSignupForm } from "./Signup.func";
import { SignupFormContainer } from "./Signup.styles";

type Props = {};

const Signup = (props: Props) => {
	const { handleChange, errors, handleSubmit } = useSignupForm();
	return (
		<Transition variants={FadeInOutVariants}>
			<BackLink to="/" />
			<SignupFormContainer>
				<Typography>Signup</Typography>
				<FormControl
					width={"50%"}
					margin="0.5em"
					isInvalid={checkInvalid(errors.firstname)}
					isRequired
				>
					<FormLabel fontSize="15px">First Name</FormLabel>
					<Input type="text" onChange={handleChange} name={"firstname"} />
					<FormHelperText>{errors.firstname}</FormHelperText>
				</FormControl>
				<FormControl
					width={"50%"}
					margin="0.5em"
					isInvalid={checkInvalid(errors.lastname)}
					isRequired
				>
					<FormLabel fontSize="15px">Last Name</FormLabel>
					<Input type="text" onChange={handleChange} name={"lastname"} />
					<FormHelperText>{errors.lastname}</FormHelperText>
				</FormControl>
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
				<Button clickHandler={handleSubmit}>Submit</Button>
			</SignupFormContainer>
		</Transition>
	);
};

export default Signup;
