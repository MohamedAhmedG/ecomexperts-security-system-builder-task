import styled from "styled-components"
import { colors, fonts, radius, spacing } from "../../styles/tokens"

interface IProductVariantStylesProps {
	isActive?: boolean
}
export const ProductVariantStyles = styled.div<IProductVariantStylesProps>`
	display: flex;
	gap: ${spacing.sm};
	flex-wrap: wrap;

	> div {
		border: ${({ isActive }) =>
			isActive ? `1px solid ${colors.mint}` : `1px solid ${colors.silver}`};
		background-color: ${({ isActive }) =>
			isActive ? colors.mintSubtle : colors.white};
		border-radius: ${radius.xs};
		padding: ${spacing.xs};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 26px;
		img {
			object-fit: contain;
			width: 25px;
			height: 25px;
		}
		span {
			font-family: ${fonts.medium};
			font-size: 10px;
			color: ${colors.dark};
		}
	}
`
