import styled from "styled-components"
import { colors, fonts } from "./tokens"

interface SectionLabelStyleProps {
	$withoutBorder?: boolean
}

export const SectionTitleStyle = styled.span`
	font-family: ${fonts.semibold};
	font-size: 22px;
	color: ${colors.void};
`

export const SectionLabelStyle = styled.div<SectionLabelStyleProps>`
	font-family: ${fonts.medium};
	font-size: 12px;
	color: ${colors.charcoal};
	border-bottom: ${({ $withoutBorder }) =>
		$withoutBorder ? "none" : `1px solid ${colors.dark}`};
	padding-inline: 15px;
	padding-bottom: 5px;
`
