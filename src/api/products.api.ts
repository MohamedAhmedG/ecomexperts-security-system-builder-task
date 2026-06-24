import { queryOptions } from "@tanstack/react-query"
import productsData from "./data/products.json"
import type { IProduct } from "@/types/products.types"

/* --------------------------------- KEYS ---------------------------------- */

export const productKeys = {
	all: ["products"] as const,
	lists: () => [...productKeys.all, "list"] as const,
}

/* -------------------------------- OPTIONS -------------------------------- */

export const productsQueryOptions = queryOptions({
	queryKey: productKeys.lists(),
	queryFn: (): Promise<IProduct[]> =>
		Promise.resolve(productsData as IProduct[]),
	staleTime: Infinity,
})
