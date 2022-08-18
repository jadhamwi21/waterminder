import React, { useEffect, useState } from "react";
import { selectWaterLevel } from "../../../redux/selectors/mainSelectors";
import { useAppSelector } from "../../../redux/store";
import { CupContainer, Water } from "./Cup.styles";

type Props = {};

const Cup = (props: Props) => {
	const waterLevel = useAppSelector(selectWaterLevel);
	return (
		<div>
			<CupContainer>
				<Water waterLevel={waterLevel} />
			</CupContainer>
		</div>
	);
};

export default Cup;
