// ─── Cart ─────────────────────────────────────────────────────────────────────

export type CartState = Record<string, number>

// ─── Product Categories ───────────────────────────────────────────────────────

export type ProductCategory = "cameras" | "plan" | "sensors" | "accessories"

// ─── Variant ─────────────────────────────────────────────────────────────────

export interface ProductVariant {
	id: string
	label: string
	swatchColor: string
	image: string
}

// ─── Product ─────────────────────────────────────────────────────────────────

export interface Product {
	id: string
	stepId: 1 | 2 | 3 | 4
	category: ProductCategory
	name: string
	description: string
	image: string
	compareAtPrice: number
	price: number
	learnMoreUrl?: string
	badge?: string
	variants?: ProductVariant[]
}
