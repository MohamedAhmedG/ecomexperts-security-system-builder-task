import { colors, fonts } from "@/styles/tokens"
import styled from "styled-components"

export const ItemPriceStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: ${fonts.regular};
	font-size: 16px;

	span {
		&.comparePrice {
			color: ${colors.danger};
			text-decoration: line-through;
		}

		&.currentPrice {
			color: ${colors.primaryAlt};
		}
	}
`
