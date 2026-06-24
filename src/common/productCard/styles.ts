import styled from "styled-components"
import { colors, fonts, radius, spacing } from "@/styles/tokens"

interface ProductCardStyleProps {
	$isAddedToCart: boolean
}

export const ProductCardStyle = styled.div<ProductCardStyleProps>`
	border: 2px solid
		${({ $isAddedToCart }) =>
			$isAddedToCart ? colors.primaryBorder : colors.white};
	border-radius: ${radius.md};
	padding: ${spacing.md};
	gap: 20px;
	width: 100%;
	display: grid;
	grid-template-columns: 140px 1fr;
	grid-template-rows: 1fr;
	height: 100%;
	background: ${colors.white};
	@media (max-width: 1100px) {
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr;
	}
	> div {
		&.imageContainer {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			.badgeContainer {
				position: absolute;
				top: 0;
				left: 0;
				text-align: center;
				font-family: ${fonts.semibold};
				font-size: 12px;
				background-color: ${colors.primary};
				border-radius: ${radius.full};
				color: ${colors.white};
				padding: 2px 6px;
			}

			img {
				object-fit: contain;
				width: 100px;
				height: 140px;
			}
		}

		&.bodyContainer {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr auto auto;
			gap: 10px;

			.footerContainer {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				gap: 10px;
			}
		}
	}
`

export const ProductNameStyle = styled.div`
	> p {
		&:first-child {
			font-family: ${fonts.semibold};
			font-size: 16px;
			color: ${colors.dark};
			margin-bottom: 10px;
		}

		&:last-child {
			font-family: ${fonts.medium};
			font-size: 12px;
			color: ${colors.darkMuted};

			> a {
				color: ${colors.link};
			}
		}
	}
`
