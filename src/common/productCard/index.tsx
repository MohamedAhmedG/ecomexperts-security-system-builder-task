import ItemPrice from "../priceSection"
import ProductCounter from "../productCounter"
import ProductVariant from "../productVariant"
import { ProductCardStyle, ProductNameStyle } from "./styles"

export default function ProductCard() {
	return (
		<ProductCardStyle isAddedToCart={true}>
			<div className='imageContainer'>
				<div className='badgeContainer'>Save 22%</div>
				<img src='/images/WyzeCam_v4.svg' alt='Product' />
			</div>

			<div className='bodyContainer'>
				<ProductNameStyle>
					<p>Wyze Cam v4</p>
					<p>
						The clearest Wyze Cam ever made. <a href='#'>Learn More</a>
					</p>
				</ProductNameStyle>
				<ProductVariant
					variants={[
						{
							id: "white",
							image: "/images/WyzeCam_v4_white.svg",
							label: "white",
							swatchColor: "white",
						},
						{
							id: "white",
							image: "/images/WyzeCam_v4_white.svg",
							label: "white",
							swatchColor: "white",
						},
						{
							id: "white",
							image: "/images/WyzeCam_v4_white.svg",
							label: "white",
							swatchColor: "white",
						},
					]}
				/>

				<div className='footerContainer'>
					<ProductCounter />
					<ItemPrice compareAtPrice={35.98} price={69.98} />
				</div>
			</div>
		</ProductCardStyle>
	)
}
