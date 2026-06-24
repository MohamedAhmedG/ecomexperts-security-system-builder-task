import { colors, fonts, radius, spacing } from "@/styles/tokens"
import styled from "styled-components"

export const ContainerProductStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	width: 100%;

	.productInfo {
		display: grid;
		grid-template-columns: 40px 1fr;
		grid-template-rows: 1fr;
		flex-basis: 100%;
		gap: 12px;

		.containerImg {
			width: 40px;
			height: 40px;
			background-color: ${colors.white};
			overflow: hidden;
			border-radius: 4px;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				object-fit: contain;
			}
		}

		.containerProductName {
			color: ${colors.void};
			font-size: 14px;
			font-family: ${fonts.medium};
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
	}

	.containerCount {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 12px;
	}
`

export const ReviewPanelWrapper = styled.div`
	min-height: 100%;
	border-radius: ${radius.md};
	padding: ${spacing.md};
	background-color: ${colors.frosted};

	.titleSection {
		padding-block: 20px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.productGroup {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		gap: 12px;
		padding-bottom: 12px;
		margin-bottom: 12px;
		border-bottom: 1px solid ${colors.ash};

		> p {
			color: ${colors.stone};
			font-size: 12px;
			font-family: ${fonts.regular};
		}
	}

	.FastShippingSection {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		gap: 12px;
		padding-bottom: 12px;
		margin-bottom: 12px;
	}

	.SatisfactionBadgeSection {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		width: 100%;
		margin-bottom: 12px;

		.logo {
			width: 78px;
			height: 78px;
			overflow: hidden;
		}

		.price {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 12px;
			flex-direction: column;

			div {
				&:first-child {
					width: 100%;
					display: flex;
					justify-content: flex-end;
					align-items: center;

					span {
						background-color: ${colors.primaryAlt};
						font-size: 12px;
						font-family: ${fonts.medium};
						color: ${colors.white};
						padding: 5px 8px;
						border-radius: 4px;
					}
				}

				&:last-child {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 12px;

					span {
						font-family: ${fonts.medium};
						font-size: 18px;

						&:first-child {
							color: ${colors.slate};
							text-decoration: line-through;
						}

						&:last-child {
							color: ${colors.primaryAlt};
							font-size: 24px;
						}
					}
				}
			}
		}
	}

	.CheckoutButton {
		display: flex;
		flex-direction: column;
		gap: 4px;

		> p {
			font-family: ${fonts.semibold};
			font-size: 12px;
			text-align: center;
			color: ${colors.mint};
		}

		> button {
			font-family: ${fonts.semibold};
			background-color: ${colors.primaryAlt};
			color: ${colors.white};
			border: none;
			border-radius: 4px;
			padding: 12px 16px;
		}
	}

	.SaveMySystemForLater {
		text-align: center;
		margin-top: 12px;

		button {
			background-color: transparent;
			border: none;
			color: ${colors.charcoal};
			font-size: 14px;
			font-family: ${fonts.regular};
			text-decoration: underline;
			font-style: italic;
		}
	}
`
