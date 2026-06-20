import { useState } from "react"
import type { IProductVariant } from "@/types/products.types"
import { ProductVariantStyles, VariantItemStyle } from "./styles"

interface ProductVariantProps {
	variants: IProductVariant[]
	onSelect?: (variant: IProductVariant) => void
}

export default function ProductVariant({ variants, onSelect }: ProductVariantProps) {
	const [selectedId, setSelectedId] = useState(variants[0]?.id ?? "")

	function handleSelect(variant: IProductVariant) {
		setSelectedId(variant.id)
		onSelect?.(variant)
	}

	return (
		<ProductVariantStyles>
			{variants.map((variant) => (
				<VariantItemStyle
					key={variant.id}
					$isActive={selectedId === variant.id}
					onClick={() => handleSelect(variant)}
				>
					{variant.image && (
						<img src={variant.image} alt={variant.label} />
					)}
					<span>{variant.label}</span>
				</VariantItemStyle>
			))}
		</ProductVariantStyles>
	)
}
