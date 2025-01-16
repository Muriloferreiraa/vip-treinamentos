import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen w-screen bg-slate-800 text-white">
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}
