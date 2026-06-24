import ArrowIcon from "@/assets/images/icon_arrow.svg?react"
import { StepHeaderStyles, SectionLabelStyle, SectionTitleStyle } from "./styles"
import { Accordion } from "@mantine/core"

interface StepHeaderProps {
	isOpen: boolean
	stepNum: string
	label: string
	icon: string
	isSelectedItem: boolean
	selectedCount: number
}

export default function StepHeader({
	isOpen,
	stepNum = "1",
	label = "",
	icon = "",
	isSelectedItem = false,
	selectedCount = 0,
}: StepHeaderProps) {
	return (
		<StepHeaderStyles $isOpen={isOpen}>
			<Accordion.Control chevron={null}>
				<SectionLabelStyle>
					<span>Step {stepNum} of 4</span>
				</SectionLabelStyle>
				<div className='contentBodySection'>
					<div>
						<div className='iconSection'>
							{icon && <img src={icon} alt='label icon' />}
						</div>
						<SectionTitleStyle>{label}</SectionTitleStyle>
					</div>
					<div className='controlSection'>
						{isSelectedItem && (
							<span className='selectedSection'>{selectedCount} selected</span>
						)}
						<ArrowIcon className='arrowIcon' />
					</div>
				</div>
			</Accordion.Control>
		</StepHeaderStyles>
	)
}
