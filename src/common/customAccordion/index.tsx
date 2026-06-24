import { Accordion, Grid } from "@mantine/core"
import { useState } from "react"
import StepHeader from "./components/stepHeader"
import { AccordionWrapper } from "./styles"
import { STEPS } from "@/constants/steps"
import type { Product } from "@/types/products.types"
import { useBundleStore } from "@/store/useBundleStore"
import ProductCard from "../productCard"

interface CustomAccordionProps {
	products: Product[]
}

export default function CustomAccordion({ products }: CustomAccordionProps) {
	const [openedValue, setOpenedValue] = useState<string | null>(null)
	const cart = useBundleStore((s) => s.cart)

	const items = STEPS.map((item) => {
		const isOpen = openedValue === item.stepId.toString()
		const stepProducts = products.filter((p) => p.stepId === item.stepId)

		const selectedCount = stepProducts.reduce((sum, p) => {
			const hasAny = Object.entries(cart).some(
				([key, qty]) => qty > 0 && (key === p.id || key.startsWith(`${p.id}::`)),
			)
			return sum + (hasAny ? 1 : 0)
		}, 0)

		return (
			<Accordion.Item
				key={item.stepId.toString()}
				value={item.stepId.toString()}
			>
				<StepHeader
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
							<Grid.Col span={{ xs: 12, md: 6 }} key={product.id}>
								<ProductCard product={product} />
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
