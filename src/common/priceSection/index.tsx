import { ItemPriceStyle } from "./styles"

interface ItemPriceProps {
	price: number
	compareAtPrice: number
}

export default function ItemPrice({ price, compareAtPrice }: ItemPriceProps) {
	return (
		<ItemPriceStyle>
			<span className='comparePrice'>${compareAtPrice.toFixed(2)}</span>
			<span className='currentPrice'>${price.toFixed(2)}</span>
		</ItemPriceStyle>
	)
}
