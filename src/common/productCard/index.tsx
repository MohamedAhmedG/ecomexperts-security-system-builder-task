import { useState } from "react"
import { useShallow } from "zustand/react/shallow"
import type { Product, ProductVariant } from "@/types/products.types"
import { lineKey } from "@/lib/utils"
import { useBundleStore } from "@/store/useBundleStore"
import ProductPrice from "../productPrice"
import ProductCounter from "../productCounter"
import VariantPicker from "../productVariant"
import { ProductCardStyle, ProductNameStyle } from "./styles"

interface ProductCardProps {
	product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
	const { badge, image, description, learnMoreUrl, name, compareAtPrice, price, variants } =
		product

	const defaultVariantId = variants?.[0]?.id
	const [activeVariantId, setActiveVariantId] = useState<string | undefined>(defaultVariantId)

	const currentLineKey = lineKey(product.id, activeVariantId)

	const activeVariant = variants?.find((v) => v.id === activeVariantId)
	const displayImage = activeVariant?.image || image

	const { qty, setQuantity } = useBundleStore(
		useShallow((s) => ({
			qty: s.cart[currentLineKey] ?? 0,
			setQuantity: s.setQuantity,
		})),
	)

	function handleVariantSelect(variant: ProductVariant) {
		const oldKey = lineKey(product.id, activeVariantId)
		const newKey = lineKey(product.id, variant.id)

		if (oldKey !== newKey && qty > 0) {
			setQuantity(oldKey, 0)
			setQuantity(newKey, qty)
		}

		setActiveVariantId(variant.id)
	}

	return (
		<ProductCardStyle $isAddedToCart={qty > 0}>
			<div className='imageContainer'>
				{badge && <div className='badgeContainer'>{badge}</div>}
				{displayImage && <img src={displayImage} alt={name} />}
			</div>

			<div className='bodyContainer'>
				<ProductNameStyle>
					<p>{name}</p>
					<p>
						{description}
						{learnMoreUrl && <a href={learnMoreUrl}> Learn More</a>}
					</p>
				</ProductNameStyle>

				{variants && variants.length > 0 && (
					<VariantPicker
						variants={variants}
						selectedVariantId={activeVariantId}
						onSelect={handleVariantSelect}
					/>
				)}

				<div className='footerContainer'>
					<ProductCounter
						value={qty}
						onChange={(next) => setQuantity(currentLineKey, next)}
					/>
					<ProductPrice compareAtPrice={compareAtPrice} price={price} />
				</div>
			</div>
		</ProductCardStyle>
	)
}
