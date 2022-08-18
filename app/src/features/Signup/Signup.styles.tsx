import styled from "styled-components";

export const SignupFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	background-color: var(--white);
	& > button:last-child {
		margin: 2em 0px;
	}
`;
