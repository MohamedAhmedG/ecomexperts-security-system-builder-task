export function lineKey(productId: string, variantId?: string): string {
	return variantId ? `${productId}::${variantId}` : productId
}

export function formatPrice(amount: number): string {
	return amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
}
