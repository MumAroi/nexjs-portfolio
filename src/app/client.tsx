"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import TransitionEffect from "@/components/TransitionEffect";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

// Client wraps any client/rsc components with AnimatePresence
export default function Client({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<html lang="en">
			<body className={`${montserrat.variable} font-mont`}>
				<AnimatePresence mode="wait">
					<motion.div
						key={pathname}
						className="w-full min-h-screen h-full bg-light dark:bg-dark"
					>
						<TransitionEffect />
						<NavBar />
						<div className="flex min-h-screen items-center text-dark dark:text-light p-32 pt-16 xl:p-24 lg:p-16 md:p-12 sm:p-8">
							{children}
						</div>
						<Footer />
					</motion.div>
				</AnimatePresence>
				<Script id="theme-switcher" strategy="beforeInteractive">
					{`
					if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
						document.documentElement.classList.add("dark")
					} else {
						document.documentElement.classList.remove("dark")
					}
				`}
				</Script>
			</body>
		</html>
	);
}
