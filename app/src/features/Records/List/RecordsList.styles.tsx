import styled from "styled-components";

export const RecordsListContainer = styled.div`
	width: 100%;
	background-color: var(--white);
	padding: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

export const RecordRow = styled.div`
	width: 40%;
	padding: 1em 2em;
	background-color: var(--white);
	color: var(--blue);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
