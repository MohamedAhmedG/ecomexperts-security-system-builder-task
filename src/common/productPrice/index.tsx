import { formatPrice } from "@/lib/utils"
import { ProductPriceStyle } from "./styles"

interface ProductPriceProps {
	price: number
	compareAtPrice: number
	isReviewStyle?: boolean
}

export default function ProductPrice({
	price,
	compareAtPrice,
	isReviewStyle = false,
}: ProductPriceProps) {
	return (
		<ProductPriceStyle isReviewStyle={isReviewStyle}>
			<span className='comparePrice'>{formatPrice(compareAtPrice)}</span>
			<span className='currentPrice'>
				{price === 0 ? "Free" : formatPrice(price)}
			</span>
		</ProductPriceStyle>
	)
}
