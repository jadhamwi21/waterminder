import styled from "styled-components";

export const BackLinkElement = styled.div`
	color: var(--black);
	padding-bottom: 0.5em;
	position: absolute;
	top: 10px;
	left: 10px;
	border-bottom: solid 1px transparent;
	transition: border-bottom-color 0.75s ease;
	width: fit-content;
	&:hover {
		border-bottom-color: var(--blue);
		cursor: pointer;
	}
`;
