import React from "react";
import { useNavigate } from "react-router-dom";
import { BackLinkElement } from "./BackLink.styles";

type Props = {
	to: string;
};

const BackLink = ({ to }: Props) => {
	const Navigate = useNavigate();
	return (
		<BackLinkElement
			onClick={() => {
				Navigate(to);
			}}
		>
			Back
		</BackLinkElement>
	);
};

export default BackLink;
