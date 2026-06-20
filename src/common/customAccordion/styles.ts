import styled from "styled-components"
import { colors, radius } from "@/styles/tokens"

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
