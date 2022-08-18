import React from "react";
import { TypographyElement } from "./Typography.styles";

type Props = {
	children: string;
};

const Typography = ({ children }: Props) => {
	return <TypographyElement>{children}</TypographyElement>;
};

export default Typography;
