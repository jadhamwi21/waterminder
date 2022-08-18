import styled from "styled-components";

export const LaunchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	user-select: none;
	height: 100vh;
	background-color: var(--white);
`;

export const WaterminderTitle = styled.h1`
	color: var(--blue);
	font-size: 35px;
`;

export const NavBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 2em 0px;
	& > button:first-child {
		margin-right: 3em;
	}
	& > button:nth-child(2) {
		margin-left: 3em;
	}
`;
