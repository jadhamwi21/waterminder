import { Button as ButtonElement } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { waterClickSound } from "../../App";
import { Delay } from "../../utils/utils";

type Props = {
	children: string;
	to?: string;
	clickHandler?: Function;

	drinkButton?: boolean;
};

const Button = ({ children, to, clickHandler, drinkButton }: Props) => {
	const navigate = useNavigate();
	const [disabled, setDisabled] = useState(false);
	return (
		<ButtonElement
			onClick={() => {
				if (to) {
					navigate(to);
				} else if (clickHandler) {
					clickHandler();
				}
				if (drinkButton) {
					waterClickSound.play();
					setDisabled(true);
					Delay(2).then(() => {
						setDisabled(false);
					});
				}
			}}
			disabled={disabled}
			color="var(--blue)"
		>
			{children}
		</ButtonElement>
	);
};

export default Button;
