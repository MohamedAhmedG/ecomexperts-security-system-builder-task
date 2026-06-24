import { SectionLabelStyle, SectionTitleStyle } from "@/styles/common"
import { ReviewPanelWrapper } from "./styles"

export default function ReviewPanel() {
	return (
		<ReviewPanelWrapper>
			<SectionLabelStyle $withOutBorder>ReviewPanel</SectionLabelStyle>
			<SectionTitleStyle className='SectionTitle'>
				Your security system
				<SectionLabelStyle className='description'>
					Review your personalized protection system designed to keep what
					matters most safe.
				</SectionLabelStyle>
			</SectionTitleStyle>
		</ReviewPanelWrapper>
	)
}
