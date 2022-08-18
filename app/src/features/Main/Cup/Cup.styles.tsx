import styled from "styled-components";
import { WaterLevel } from "../../../ts/interfaces/main_interfaces";

export const CupContainer = styled.div`
	width: 125px;
	height: 300px;
	border: solid 1px var(--black);
	border-top: none;
	border-radius: 6px;
	position: relative;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
`;

export const Water = styled.div<{ waterLevel: WaterLevel }>`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: var(--white);
	height: ${(props) => props.waterLevel};
	background-color: var(--blue);
	transition: all 1s ease !important;
	border-radius: 6px;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
`;
