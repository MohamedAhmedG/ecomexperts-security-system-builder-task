import { Accordion, Grid } from "@mantine/core"
import { useState } from "react"
import CustomControl from "./components/customControl"
import { AccordionWrapper } from "./styles"
import { STEPS } from "@/constants/steps"
import type { IProduct } from "@/types/products.types"
import ProductCard from "../productCard"

interface IproductsProps {
	products: IProduct[]
}

export default function CustomAccordion({ products }: IproductsProps) {
	const [openedValue, setOpenedValue] = useState<string | null>(null)
	const [selectedCounts, setSelectedCounts] = useState<Record<string, number>>({})

	function handleCountChange(productId: string, count: number) {
		setSelectedCounts((prev) => ({ ...prev, [productId]: count }))
	}

	const items = STEPS.map((item) => {
		const isOpen = openedValue === item.stepId.toString()
		const stepProducts = products.filter((p) => p.stepId === item.stepId)
		const selectedCount = stepProducts.reduce(
			(sum, p) => sum + (selectedCounts[p.id] ?? 0),
			0,
		)

		return (
			<Accordion.Item
				key={item.stepId.toString()}
				value={item.stepId.toString()}
			>
				<CustomControl
					isOpen={isOpen}
					icon={item.icon ?? ""}
					isSelectedItem={selectedCount > 0}
					label={item.title}
					selectedCount={selectedCount}
					stepNum={item.stepId.toString()}
				/>
				<Accordion.Panel>
					<Grid>
						{stepProducts.map((product) => (
							<Grid.Col
								span={{ xs: 12, sm: 6, md: 4 }}
								key={product.id}
							>
								<ProductCard
									Product={product}
									onCountChange={handleCountChange}
								/>
							</Grid.Col>
						))}
					</Grid>
				</Accordion.Panel>
			</Accordion.Item>
		)
	})

	return (
		<AccordionWrapper>
			<Accordion
				variant='unstyled'
				chevron={null}
				value={openedValue}
				onChange={setOpenedValue}
			>
				{items}
			</Accordion>
		</AccordionWrapper>
	)
}
