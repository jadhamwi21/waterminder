import React from "react";
import { Outlet } from "react-router-dom";
import AppIcon from "../AppIcon/AppIcon";
import { MainHeaderContainer } from "./Header.styles";

type Props = {};

const Header = (props: Props) => {
	return (
		<>
			<MainHeaderContainer>
				<AppIcon height="35px" width="35px" />
			</MainHeaderContainer>
			<Outlet />
		</>
	);
};

export default Header;
