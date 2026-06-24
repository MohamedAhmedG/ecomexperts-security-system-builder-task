import styled from "styled-components"
import { colors, fonts, radius, spacing } from "@/styles/tokens"

export const AccordionWrapper = styled.div`
	.mantine-Accordion-item {
		&[data-active="true"] {
			background-color: ${colors.frosted};
			border-radius: ${radius.md};
			.contentBodySection {
				margin-bottom: 0;
				border-bottom: none;
			}
		}
	}
`

export const NextButton = styled.button`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: none;
	button {
		display: block;
		margin-top: ${spacing.xl};
		padding: 8px ${spacing.xl};
		background-color: transparent;
		color: ${colors.primary};
		font-family: ${fonts.semibold};
		font-size: 15px;
		border: none;
		border-radius: ${radius.sm};
		border: 1px solid ${colors.primary};
		cursor: pointer;
		transition: opacity 0.15s ease;

		&:hover {
			opacity: 0.88;
		}

		&:active {
			opacity: 0.76;
		}
	}
`
