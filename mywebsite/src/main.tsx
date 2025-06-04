import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HeroUIProvider>
			<main className="min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-start sm:justify-center px-2 sm:px-0">
				<App />
			</main>
		</HeroUIProvider>
	</React.StrictMode>
);
