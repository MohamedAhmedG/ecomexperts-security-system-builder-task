import { useSuspenseQuery } from "@tanstack/react-query"
import "./App.css"
import CustomAccordion from "./common/customAccordion"
import { productsQueryOptions } from "./api/queries/productsQueries"

export default function App() {
	const { data: products } = useSuspenseQuery(productsQueryOptions)

	return (
		<div>
			<CustomAccordion products={products}/>
		</div>
	)
}
