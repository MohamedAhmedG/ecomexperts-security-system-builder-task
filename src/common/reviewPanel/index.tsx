import { useMemo } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useBundleStore } from "@/store/useBundleStore"
import { productsQueryOptions } from "@/api/products.api"
import type { Product, ProductCategory } from "@/types/products.types"
import { lineKey, formatPrice } from "@/lib/utils"
import { SectionLabelStyle, SectionTitleStyle } from "@/styles/common"
import { ReviewPanelWrapper } from "./styles"
import ReviewProductRow from "./components/ReviewProductRow"
import SatisfactionBadge from "@/assets/images/SatisfactionBadge.svg?react"

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<ProductCategory, string> = {
	cameras: "Cameras",
	plan: "Plan",
	sensors: "Sensors",
	accessories: "Accessories",
}

const CATEGORY_ORDER: ProductCategory[] = [
	"cameras",
	"plan",
	"sensors",
	"accessories",
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function ReviewPanel() {
	const { data: allProducts } = useSuspenseQuery(productsQueryOptions)
	const cart = useBundleStore((s) => s.cart)

	const productMap = useMemo(() => {
		const m = new Map<string, { product: Product; image: string }>()
		for (const p of allProducts) {
			if (p.variants && p.variants.length > 0) {
				for (const v of p.variants) {
					m.set(lineKey(p.id, v.id), { product: p, image: v.image || p.image })
				}
			} else {
				m.set(p.id, { product: p, image: p.image })
			}
		}
		return m
	}, [allProducts])

	const cartEntries = useMemo(
		() => Object.entries(cart).filter(([, qty]) => qty > 0),
		[cart],
	)

	const sections = useMemo(() => {
		const grouped: Record<
			string,
			{ product: Product; lk: string; image: string }[]
		> = {}
		for (const [lk, qty] of cartEntries) {
			if (qty <= 0) continue
			const entry = productMap.get(lk)
			if (!entry) continue
			const { product, image } = entry
			const cat = product.category
			if (!grouped[cat]) grouped[cat] = []
			grouped[cat].push({ product, lk, image })
		}
		return grouped
	}, [cartEntries, productMap])

	const { compareTotal, activeTotal } = useMemo(() => {
		let compareTotal = 0
		let activeTotal = 0
		for (const [lk, qty] of cartEntries) {
			const entry = productMap.get(lk)
			if (!entry) continue
			compareTotal += entry.product.compareAtPrice * qty
			activeTotal += entry.product.price * qty
		}
		return { compareTotal, activeTotal }
	}, [cartEntries, productMap])

	const savings = compareTotal - activeTotal
	const hasItems = cartEntries.length > 0

	return (
		<ReviewPanelWrapper>
			<SectionLabelStyle $withoutBorder>Review</SectionLabelStyle>

			<div className='titleSection'>
				<SectionTitleStyle>Your security system</SectionTitleStyle>
				<SectionLabelStyle className='description'>
					Review your personalized protection system designed to keep what
					matters most safe.
				</SectionLabelStyle>
			</div>

			{!hasItems && (
				<p className='emptyState'>Add products to see your system here.</p>
			)}

			{CATEGORY_ORDER.filter((cat) => sections[cat]?.length > 0).map((cat) => (
				<div className='productGroup' key={cat}>
					<p>{CATEGORY_LABELS[cat]}</p>
					{sections[cat].map(({ product, lk, image }) => (
						<ReviewProductRow
							key={lk}
							lineKey={lk}
							imageSrc={image}
							name={product.name}
							compareAtPrice={product.compareAtPrice}
							price={product.price}
						/>
					))}
				</div>
			))}

			{savings > 0 && (
				<div className='fastShippingSection'>
					<ReviewProductRow
						imageSrc='/images/icon_FastShipping.svg'
						name='Fast Shipping'
						compareAtPrice={5.99}
						price={0}
					/>
				</div>
			)}

			{hasItems && (
				<>
					<div className='satisfactionBadgeSection'>
						<div className='logo'>
							<SatisfactionBadge />
						</div>
						<div className='price'>
							<div>
								<span>as low as $19.19/mo</span>
							</div>
							<div>
								<span>{formatPrice(compareTotal)}</span>
								<span>{formatPrice(activeTotal)}</span>
							</div>
						</div>
					</div>

					<div className='checkoutButton'>
						{savings > 0 && (
							<p>
								Congrats! You're saving {formatPrice(savings)} on your security
								bundle!
							</p>
						)}
						<button type='button'>Checkout</button>
					</div>

					<div className='saveMySystemForLater'>
						<button type='button'>Save my system for later</button>
					</div>
				</>
			)}
		</ReviewPanelWrapper>
	)
}
