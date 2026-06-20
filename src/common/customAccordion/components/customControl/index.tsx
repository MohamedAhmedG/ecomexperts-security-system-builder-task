import ArrowIcon from "@/assets/images/icon_arrow.svg?react"
import { CustomControlStyles } from "./styles.ts"
import { Accordion } from "@mantine/core"
interface ICustomControlProps {
	isOpen: boolean
	stepNum: string
	label: string
	icon: string
	isSelectedItem: boolean
	selectedCount: number
}
export default function CustomControl({
	isOpen,
	stepNum = "1",
	label = "",
	icon = "",
	isSelectedItem = false,
	selectedCount = 0,
}: ICustomControlProps) {
	return (
		<CustomControlStyles $isOpen={isOpen}>
			<Accordion.Control chevron={null}>
				<div className='stepsSection'>
					<span>Step {stepNum} of 4</span>
				</div>
				<div className='contentBodySection'>
					<div>
						<div className='iconSection'>
							{icon && <img src={icon} alt='label icon' />}
						</div>
						<div className='labelSection'>
							<span>{label}</span>
						</div>
					</div>
					<div className='controlSection'>
						{isSelectedItem && (
							<span className='selectedSection'>{selectedCount} selected</span>
						)}
					<ArrowIcon className='ArrowIconStyle' />
					</div>
				</div>
			</Accordion.Control>
		</CustomControlStyles>
	)
}
