import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartState } from "@/types/products.types"

// ─── Types ────────────────────────────────────────────────────────────────────

interface BundleState {
	cart: CartState
}

interface BundleActions {
	setQuantity: (lineKey: string, qty: number) => void
}

type BundleStore = BundleState & BundleActions

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_STATE: BundleState = {
	cart: {},
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useBundleStore = create<BundleStore>()(
	persist(
		(set) => ({
			...DEFAULT_STATE,

			setQuantity: (lineKey, qty) =>
				set((s) => ({
					cart:
						qty === 0
							? Object.fromEntries(
									Object.entries(s.cart).filter(([k]) => k !== lineKey),
								)
							: { ...s.cart, [lineKey]: qty },
				})),
		}),
		{
			name: "bundle-system",
			version: 1,
			partialize: (s) => ({ cart: s.cart }),
			migrate: () => ({ ...DEFAULT_STATE }),
		},
	),
)
