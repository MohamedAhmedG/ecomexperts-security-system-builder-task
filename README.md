# Wyze Security System Bundle Builder

A multi-step bundle builder built as a React prototype. Shoppers assemble a custom security system through a 4-step accordion and see a live review panel update in real time as they make selections.

---

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| UI components | Mantine v7 |
| Styling | styled-components |
| State management | Zustand with `persist` middleware |
| Server-state / data fetching | TanStack React Query |
| Data source | Local JSON file (`src/api/data/products.json`) |

---

## Architecture decisions

**Data source — local JSON, not a backend**
Products are loaded from a local JSON file via a React Query mock. This keeps the setup self-contained (no server to spin up). Plugging in a real API would only require changing `productsQueryOptions` to point at a fetch URL instead of the imported JSON.

**State management — Zustand with `persist`**
Cart state lives in a single Zustand store. The `persist` middleware serialises the cart to `localStorage` on every state change, so "Save my system for later" is effectively automatic. The button gives the user explicit confirmation that their system is saved. On first visit (empty `localStorage`), the store seeds a default cart that matches the design's pre-populated review panel (plan, sensors, accessory).

**Cart key scheme — `productId::variantId`**
Each variant of a product is tracked as an independent line item using a composite key (`lineKey(productId, variantId)`). Switching colour variants on a card shows that variant's own quantity without disturbing the others. The review panel then renders one row per variant that has a count above zero.

**Accordion navigation — controlled state**
The accordion uses a single piece of React state (`openedValue`). Step 1 opens by default. Each expanded step has a "Next: …" button that advances `openedValue` to the following step, matching the intended UX flow.

**Styling — styled-components + design tokens**
Design tokens (colors, spacing, radii, fonts) are centralised in `src/styles/tokens.ts`. All component styles consume these tokens, making visual tweaks low-risk and consistent.

---

## What's implemented

- Two-column desktop layout (builder left, review panel right)
- 4-step accordion — Step 1 open by default, "Next: …" button advances to the next step
- Step headers: "Step N of 4", icon, title, "N selected" counter, animated chevron
- Product cards: discount badge, image, title, description, Learn More link, variant picker, quantity stepper, struck-through compare-at price + active price, selected-state highlighted border
- Variant selection with independent quantities — switching colour never resets other variants
- Quantity steppers kept in sync between cards and review panel
- Review panel grouped by category (Cameras, Plan, Sensors, Accessories) with thumbnails, quantity steppers, and per-line pricing
- Fast Shipping row, satisfaction-guarantee badge, financing line, struck-through pre-discount total, savings callout, Checkout button (placeholder)
- "Save my system for later" — cart persists automatically to `localStorage`; button shows "✓ System saved!" confirmation
- Pre-populated default state matching the design mock (plan, sensors, accessory seeded on first visit)
- Responsive layout down to mobile using Mantine's grid breakpoints

---

## Tradeoffs and known limitations

- **Financing amount is hardcoded** (`as low as $19.19/mo`). A real implementation would divide the total by the number of financing months from a rates API.
- **Fast Shipping is hardcoded** as a $5.99 → $0 line item. Shipping eligibility rules would come from the backend in production.
- **No backend / API bonus** — products load from a local JSON file. The data layer is intentionally thin so the focus stays on the UI.
- **Checkout button is a placeholder** — it has no click handler. The brief says this is acceptable for the prototype.
- **Responsiveness is grid-level** — columns stack on small viewports, but the review panel does not become a sticky drawer or bottom sheet on mobile. A production build would likely add a collapsed summary bar that expands into a full-screen panel on phones.
- **Product images for sensors and accessories** are missing from the design assets. Affected products render without an image; the layout handles this gracefully.
