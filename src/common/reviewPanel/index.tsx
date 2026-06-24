import { SectionLabelStyle, SectionTitleStyle } from "@/styles/common"
import { ReviewPanelWrapper } from "./styles"
import ReviewProductRow from "./components/ReviewProductRow"
import SatisfactionBadge from "@/assets/images/SatisfactionBadge.svg?react"

export default function ReviewPanel() {
	return (
		<ReviewPanelWrapper>
			<SectionLabelStyle $withOutBorder>ReviewPanel</SectionLabelStyle>

			<div className='titleSection'>
				<SectionTitleStyle>Your security system</SectionTitleStyle>
				<SectionLabelStyle $withOutBorder className='description'>
					Review your personalized protection system designed to keep what
					matters most safe.
				</SectionLabelStyle>
			</div>

			<div className='productGroup'>
				<p>Cameras</p>
				<ReviewProductRow
					name='Wyze Cam v4'
					compareAtPrice={35.98}
					price={27.98}
					showCounter
				/>
				<ReviewProductRow
					name='Wyze Cam v4'
					compareAtPrice={35.98}
					price={27.98}
					showCounter
				/>
				<ReviewProductRow
					name='Wyze Cam v4'
					compareAtPrice={35.98}
					price={27.98}
					showCounter
				/>
			</div>

			<div className='FastShippingSection'>
				<ReviewProductRow
					img='/images/icon_FastShipping.svg'
					name='Fast Shipping'
					compareAtPrice={5.99}
					price={0}
				/>
			</div>

			<div className='SatisfactionBadgeSection'>
				<div className='logo'>
					<SatisfactionBadge />
				</div>
				<div className='price'>
					<div>
						<span>as low as $19.19/mo</span>
					</div>
					<div>
						<span>$238.81</span>
						<span>$187.89</span>
					</div>
				</div>
			</div>

			<div className='CheckoutButton'>
				<p>Congrats! You're saving $50.92 on your security bundle!</p>
				<button type='button'>Checkout</button>
			</div>

			<div className='SaveMySystemForLater'>
				<button type='button'>Save my system for later</button>
			</div>
		</ReviewPanelWrapper>
	)
}
