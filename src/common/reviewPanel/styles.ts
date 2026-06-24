import { colors, radius, spacing } from "@/styles/tokens"
import styled from "styled-components"

export const ReviewPanelWrapper = styled.div`
	min-height: 100%;
	border-radius: ${radius.md};
	padding: ${spacing.md};
	background-color: ${colors.frosted};
	.SectionTitle {
		padding: 20px;
		display: inline-block;
		.description {
			padding-inline: 0;
			padding-bottom: 10px;
			border-color: ${colors.ash};
		}
	}
`
