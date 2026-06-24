import { colors, fonts } from "@/styles/tokens"
import styled from "styled-components"
export { SectionLabelStyle } from "@/styles/common"

interface ICustomControlStylesProps {
	$isOpen: boolean
}

export const CustomControlStyles = styled.div<ICustomControlStylesProps>`
	> button {
		padding: 0;

		.contentBodySection {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 15px;
			border-bottom: 1px solid ${colors.dark};

			> div {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 8px;

				.iconSection {
					width: 26px;
					height: 26px;
					object-fit: contain;
				}

				.labelSection {
					font-family: ${fonts.semibold};
					font-size: 22px;
					color: ${colors.void};
				}
			}

			.controlSection {
				.selectedSection {
					font-family: ${fonts.medium};
					font-size: 14px;
					color: ${colors.primaryAlt};
				}

				.ArrowIconStyle {
					transform: ${({ $isOpen }) =>
						$isOpen ? "rotate(180deg)" : "rotate(0deg)"};
					transition: transform 200ms ease;
				}
			}
		}
	}
`
