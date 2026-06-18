import type { IProductVariant } from "@/api/products.types"
import { ProductVariantStyles } from "./styles"

type ProductVariantProps = {
	variants: IProductVariant[]
}

export default function ProductVariant({ variants }: ProductVariantProps) {
	return (
		<ProductVariantStyles isActive>
			{variants?.map((variant) => (
				<div key={variant.id}>
					<img src={variant.image} alt={variant.label} />
					<span>{variant.label}</span>
				</div>
			))}
		</ProductVariantStyles>
	)
}
