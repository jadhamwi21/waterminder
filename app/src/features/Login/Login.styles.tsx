import styled from "styled-components";

export const LoginFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: var(--white);
	width: 100%;
	& > button:last-child {
		margin: 2em 0px;
	}
`;
