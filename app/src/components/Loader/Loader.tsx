import { Spinner } from "@chakra-ui/react";
import React from "react";
import { FullPage } from "./Loader.styles";

type Props = {
	fullPage?: boolean;
	margin?: string;
};

const Loader = ({ fullPage, margin }: Props) => {
	return fullPage !== undefined && fullPage ? (
		<FullPage>
			<Spinner
				thickness="4px"
				speed="1s"
				emptyColor="gray.200"
				color="var(--blue)"
				size="xl"
				margin={margin}
			/>
		</FullPage>
	) : (
		<Spinner
			thickness="4px"
			speed="1s"
			emptyColor="gray.200"
			color="var(--blue)"
			size="xl"
			margin={margin}
		/>
	);
};

export default Loader;
