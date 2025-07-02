import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// Bootstrap css and js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Bootstrap icons styles
import "bootstrap-icons/font/bootstrap-icons.css";
// Custom styles
import "./assets/css/theme.css";
import "./assets/css/boxicons.css";

// Toaster for notifications
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
			<Toaster duration={2000} position="top-right" richColors />
		</BrowserRouter>
	</StrictMode>
);
