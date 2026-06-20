import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import App from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

/* -------------------------------- QUERY CLIENT --------------------------- */

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { staleTime: Infinity, retry: false },
	},
})

/* ---------------------------------- MOUNT -------------------------------- */
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<App />
			</MantineProvider>
		</QueryClientProvider>
	</StrictMode>,
)
