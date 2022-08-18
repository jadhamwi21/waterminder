import styled from "styled-components";

export const AppIconElement = styled.img<{
	iconHeight: string;
	iconWidth: string;
}>`
	height: ${(props) => props.iconHeight};
	width: ${(props) => props.iconWidth};
`;
