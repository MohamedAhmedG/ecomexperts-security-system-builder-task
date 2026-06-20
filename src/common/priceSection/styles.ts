import { colors, fonts } from "@/styles/tokens"
import styled from "styled-components"
interface IItemPriceStyleProps {
	isFirstStyle: boolean
}
export const ItemPriceStyle = styled.div<IItemPriceStyleProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: ${({ isFirstStyle }) =>
		isFirstStyle ? fonts.regular : fonts.semibold};

	font-size: 16px;
	span {
		&.comparePrice {
			color: ${({ isFirstStyle }) =>
				isFirstStyle ? colors.danger : colors.steel};
			text-decoration: line-through;
		}
		&.currentPrice {
			color: ${({ isFirstStyle }) =>
				isFirstStyle ? colors.steel : colors.primaryAlt};
		}
	}
`
