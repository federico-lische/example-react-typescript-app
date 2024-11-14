import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../theme/theme.ts";
import { setupStore } from "../store/store.ts";
import { ErrorFallback } from "../components/Errors/ErrorFallback.tsx";
import App from "./App.tsx";

const container = document.getElementById("root");

if (container) {
	const root = createRoot(container);

	root.render(
		<StrictMode>
			<Provider store={setupStore()}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<App />
					</ErrorBoundary>
				</ThemeProvider>
			</Provider>
		</StrictMode>
	);
} else {
	throw new Error(
		"Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
	);
}
