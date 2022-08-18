import styled from "styled-components";

export const MainFlexbox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 91vh;
	margin: 0 auto;
	background-color: var(--white);
	& > div {
		width: 50%;
		display: grid;
		place-items: center;
	}
`;
