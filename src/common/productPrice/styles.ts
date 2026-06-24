import { colors, fonts } from "@/styles/tokens"
import styled from "styled-components"
interface ProductPriceStyleProps {
	isReviewStyle: boolean
}
export const ProductPriceStyle = styled.div<ProductPriceStyleProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: ${fonts.regular};
	font-size: 16px;

	span {
		&.comparePrice {
			color: ${({ isReviewStyle }) =>
				isReviewStyle ? colors.steel : colors.danger};
			text-decoration: line-through;
		}

		&.currentPrice {
			color: ${({ isReviewStyle }) =>
				isReviewStyle ? colors.primary : colors.steel};
		}
	}
`
