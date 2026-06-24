import { useState } from "react"
import type { ProductVariant } from "@/types/products.types"
import { ProductVariantStyles, VariantItemStyle } from "./styles"

interface VariantPickerProps {
	variants: ProductVariant[]
	selectedVariantId?: string
	onSelect?: (variant: ProductVariant) => void
}

export default function VariantPicker({
	variants,
	selectedVariantId,
	onSelect,
}: VariantPickerProps) {
	const isControlled = selectedVariantId !== undefined
	const [internalId, setInternalId] = useState(variants[0]?.id ?? "")
	const selectedId = isControlled ? selectedVariantId : internalId

	function handleSelect(variant: ProductVariant) {
		if (!isControlled) setInternalId(variant.id)
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
