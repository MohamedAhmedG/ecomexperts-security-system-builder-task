import styled from "styled-components"
import { colors, fonts, radius, spacing } from "@/styles/tokens"
interface IProductCounterStyleProps {
	isFirstStyle: boolean
}
export const ProductCounterStyle = styled.div`
	display: flex;
	gap: ${spacing.sm};
	padding: ${spacing.sm};
	width: fit-content;
	justify-content: center;
	align-items: center;
	height: fit-content;
`

export const CounterButtonStyle = styled.button<IProductCounterStyleProps>`
	background: ${({ isFirstStyle }) =>
		isFirstStyle ? colors.fog : colors.white};
	border: none;
	cursor: pointer;
	color: ${colors.slate};
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${radius.xs};

	&:disabled {
		color: ${colors.mist};
		border: 2px solid ${colors.mist};
		cursor: not-allowed;
		background: none;
	}
`

export const CounterValueStyle = styled.p`
	font-family: ${fonts.semibold};
	font-size: 14px;
	color: ${colors.dark};
	min-width: 24px;
	text-align: center;
	margin: 0;
`
