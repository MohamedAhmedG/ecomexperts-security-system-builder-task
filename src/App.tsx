import { useSuspenseQuery } from "@tanstack/react-query"
import "./App.css"
import CustomAccordion from "./common/customAccordion"
import { productsQueryOptions } from "./api/products.api"
import { Container, Grid } from "@mantine/core"
import ReviewPanel from "./common/reviewPanel"

export default function App() {
	const { data: products } = useSuspenseQuery(productsQueryOptions)

	return (
		<Container fluid>
			<Grid>
				<Grid.Col
					span={{
						xs: 12,
						md: 8,
					}}
				>
					<CustomAccordion products={products} />
				</Grid.Col>
				<Grid.Col
					span={{
						xs: 12,
						md: 4,
					}}
				>
					<ReviewPanel />
				</Grid.Col>
			</Grid>
		</Container>
	)
}
