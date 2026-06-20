import type { IProduct } from "@/types/products.types"
import ItemPrice from "../priceSection"
import ProductCounter from "../productCounter"
import ProductVariant from "../productVariant"
import { ProductCardStyle, ProductNameStyle } from "./styles"
import { useState } from "react"

interface IProductInfo {
	Product: IProduct
	onCountChange?: (productId: string, count: number) => void
}

export default function ProductCard({ Product, onCountChange }: IProductInfo) {
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
	} = Product

	function handleCountChange(value: number) {
		setCount(value)
		onCountChange?.(Product.id, value)
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
