import styled from "styled-components"
import { colors, fonts } from "./tokens"

export const SectionLabelStyle = styled.div`
	font-family: ${fonts.medium};
	font-size: 12px;
	color: ${colors.charcoal};
	border-bottom: 1px solid ${colors.dark};
	padding-inline: 15px;
	padding-bottom: 5px;
`
