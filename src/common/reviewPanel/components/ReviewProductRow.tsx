import { useShallow } from "zustand/react/shallow"
import { useBundleStore } from "@/store/useBundleStore"
import ProductPrice from "../../productPrice"
import ProductCounter from "../../productCounter"
import { ContainerProductStyle } from "../styles"

interface ReviewProductRowProps {
	name: string
	imageSrc?: string
	compareAtPrice: number
	price: number
	lineKey?: string
}

export default function ReviewProductRow({
	name,
	compareAtPrice,
	price,
	lineKey,
	imageSrc,
}: ReviewProductRowProps) {
	const { qty, setQuantity } = useBundleStore(
		useShallow((s) => ({
			qty: lineKey !== undefined ? (s.cart[lineKey] ?? 0) : 0,
			setQuantity: s.setQuantity,
		})),
	)

	return (
		<ContainerProductStyle>
			<div className='productInfo'>
				<div className='containerImg'>
					{imageSrc && <img src={imageSrc} alt={name} />}
				</div>
				<div className='containerProductName'>
					<span>{name}</span>
				</div>
			</div>
			<div className='containerCount'>
				{lineKey !== undefined && (
					<ProductCounter
						value={qty}
						onChange={(next) => setQuantity(lineKey, next)}
						isFirstStyle={false}
					/>
				)}
				<ProductPrice
					compareAtPrice={compareAtPrice}
					price={price}
					isReviewStyle
				/>
			</div>
		</ContainerProductStyle>
	)
}
