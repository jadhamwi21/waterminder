import React from "react";
import AppIcon from "../../components/AppIcon/AppIcon";
import Button from "../../components/Button/Button";
import Transition from "../../components/Transition/Transition";
import Typography from "../../components/Typography/Typography";
import { FadeInOutVariants } from "../../constants/variants";
import { LaunchContainer, NavBox, WaterminderTitle } from "./Launch.styles";

type Props = {};

const Launch = (props: Props) => {
	return (
		<Transition variants={FadeInOutVariants}>
			<LaunchContainer>
				<AppIcon height="100px" width="100px" />
				<WaterminderTitle>Waterminder</WaterminderTitle>
				<Typography>Stay hydrated.</Typography>
				<NavBox>
					<Button to="/login">Login</Button>
					<Button to="/signup">Signup</Button>
				</NavBox>
			</LaunchContainer>
		</Transition>
	);
};

export default Launch;
