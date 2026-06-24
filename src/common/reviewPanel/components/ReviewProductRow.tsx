import ItemPrice from "../../productPrice"
import ProductCounter from "../../productCounter"
import { ContainerProductStyle } from "../styles"

interface ReviewProductRowProps {
	name: string
	img?: string
	compareAtPrice: number
	price: number
	showCounter?: boolean
}

export default function ReviewProductRow({
	name,
	compareAtPrice,
	price,
	showCounter = false,
	img,
}: ReviewProductRowProps) {
	return (
		<ContainerProductStyle>
			<div className='productInfo'>
				<div className='containerImg'>
					{img && <img src={img} alt='logo' />}
				</div>
				<div className='containerProductName'>
					<span>{name}</span>
				</div>
			</div>
			<div className='containerCount'>
				{showCounter && <ProductCounter />}
				<ItemPrice compareAtPrice={compareAtPrice} price={price} />
			</div>
		</ContainerProductStyle>
	)
}
