// ─── Product Categories ───────────────────────────────────────────────────────

export type ProductCategory = "cameras" | "plan" | "sensors" | "accessories"

// ─── Variant ─────────────────────────────────────────────────────────────────

export interface IProductVariant {
	id: string
	label: string
	swatchColor: string
	image: string
}

// ─── Product ─────────────────────────────────────────────────────────────────

export interface IProduct {
	id: string
	stepId: number
	category: ProductCategory
	name: string
	description: string
	image: string
	compareAtPrice: number
	price: number
	learnMoreUrl?: string
	badge?: string
	variants?: IProductVariant[]
}
