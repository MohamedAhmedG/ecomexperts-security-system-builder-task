import { formatPrice } from "@/lib/utils"
import { ProductPriceStyle } from "./styles"

interface ProductPriceProps {
	price: number
	compareAtPrice: number
}

export default function ProductPrice({ price, compareAtPrice }: ProductPriceProps) {
	return (
		<ProductPriceStyle>
			<span className='comparePrice'>{formatPrice(compareAtPrice)}</span>
			<span className='currentPrice'>
				{price === 0 ? "Free" : formatPrice(price)}
			</span>
		</ProductPriceStyle>
	)
}
