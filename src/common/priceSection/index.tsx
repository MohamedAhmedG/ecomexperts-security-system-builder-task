import { ItemPriceStyle } from "./styles"

interface ItemPriceProps {
	price: number
	compareAtPrice: number
}

export default function ItemPrice({ price, compareAtPrice }: ItemPriceProps) {
	return (
		<ItemPriceStyle>
			<span className='priceAfter'>${compareAtPrice.toFixed(2)}</span>
			<span className='priceBefore'>${price.toFixed(2)}</span>
		</ItemPriceStyle>
	)
}
