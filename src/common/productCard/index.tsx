import type { IProduct } from "@/types/products.types"
import ItemPrice from "../productPrice"
import ProductCounter from "../productCounter"
import ProductVariant from "../productVariant"
import { ProductCardStyle, ProductNameStyle } from "./styles"
import { useState } from "react"

interface ProductCardProps {
	product: IProduct
	onCountChange?: (productId: string, count: number) => void
}

export default function ProductCard({ product, onCountChange }: ProductCardProps) {
	const [count, setCount] = useState(0)

	const {
		badge,
		image,
		description,
		learnMoreUrl,
		name,
		compareAtPrice,
		price,
		variants,
	} = product

	function handleCountChange(value: number) {
		setCount(value)
		onCountChange?.(product.id, value)
	}

	return (
		<ProductCardStyle $isAddedToCart={count > 0}>
			<div className='imageContainer'>
				{badge && <div className='badgeContainer'>{badge}</div>}
				{image && <img src={image} alt={name} />}
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
					<ProductVariant variants={variants} />
				)}

				<div className='footerContainer'>
					<ProductCounter onChange={handleCountChange} />
					<ItemPrice compareAtPrice={compareAtPrice} price={price} />
				</div>
			</div>
		</ProductCardStyle>
	)
}
