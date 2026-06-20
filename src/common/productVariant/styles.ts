import styled from "styled-components"
import { colors, fonts, radius, spacing } from "@/styles/tokens"

export const ProductVariantStyles = styled.div`
	display: flex;
	gap: ${spacing.sm};
	flex-wrap: wrap;
`

interface IVariantItemStyleProps {
	$isActive: boolean
}

export const VariantItemStyle = styled.div<IVariantItemStyleProps>`
	border: 1px solid
		${({ $isActive }) => ($isActive ? colors.mint : colors.silver)};
	background-color: ${({ $isActive }) =>
		$isActive ? colors.mintSubtle : colors.white};
	border-radius: ${radius.xs};
	padding: ${spacing.xs};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 26px;
	overflow: hidden;
	cursor: pointer;

	&:hover {
		border-color: ${colors.mint};
	}

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
`
