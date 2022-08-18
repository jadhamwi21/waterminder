import React from "react";
import { AppIconElement } from "./AppIcon.styles";
import GlassIcon from "../../assets/images/Glass.png";

type Props = {
	height: string;
	width: string;
};

const AppIcon = ({ height, width }: Props) => {
	return (
		<AppIconElement iconHeight={height} iconWidth={width} src={GlassIcon} />
	);
};

export default AppIcon;
