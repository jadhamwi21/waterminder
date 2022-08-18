import styled from "styled-components";

export const DrinkContainer = styled.div``;

export const NumberOfCupsFlex = styled.div`
	display: flex;
	flex-direction: row;
	background-color: var(--white);
	& > span:first-child {
		color: var(--blue);
	}
	& > span:last-child {
		color: var(--black);
		margin-left: 0.5em;
	}
`;

export const ButtonsFlex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-top: 1em;
	& > button {
		margin-top: 1em;
	}
`;
