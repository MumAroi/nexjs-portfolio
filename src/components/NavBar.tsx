"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
	TwitterIcon,
	GithubIcon,
	LinkedInIcon,
	PinterestIcon,
	DribbbleIcon,
	SunIcon,
	MoonIcon,
} from "./Icon";

import { motion } from "framer-motion";
import useThemeSwitcher from "./hook/useThemeSwitcher";

type Props = {};

const CustomLink = ({
	href,
	title,
	className,
}: { href: string; title: string; className: string | null }) => {
	const pathname = usePathname();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
					pathname === href ? "w-full" : "w-0"
				}`}
			/>
		</Link>
	);
};

const NavBar = (props: Props) => {
	const [mode, setMode] = useThemeSwitcher();

	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
			<nav>
				<CustomLink href="/" title="Home" className="mr-4" />
				<CustomLink href="/about" title="About" className="mx-4" />
				<CustomLink href="/projects" title="Projects" className="mx-4" />
				<CustomLink href="/articles" title="Articles" className="ml-4" />
			</nav>

			<nav className="flex items-center justify-center flex-wrap">
				<motion.a
					href="https://twitter.com"
					target="_blank"
					rel="noreferrer"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6 mr-3"
				>
					<TwitterIcon />
				</motion.a>
				<motion.a
					href="https://twitter.com"
					target="_blank"
					rel="noreferrer"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6 mx-3"
				>
					<GithubIcon />
				</motion.a>
				<motion.a
					href="https://twitter.com"
					target="_blank"
					rel="noreferrer"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6 mx-3"
				>
					<LinkedInIcon />
				</motion.a>
				<motion.a
					href="https://twitter.com"
					target="_blank"
					rel="noreferrer"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6 mx-3 bg-light rounded-full"
				>
					<PinterestIcon />
				</motion.a>
				<motion.a
					href="https://twitter.com"
					target="_blank"
					rel="noreferrer"
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6 mx-3"
				>
					<DribbbleIcon />
				</motion.a>

				<button
					type="button"
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1 ${
						mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
					}`}
				>
					{mode === "dark" ? (
						<MoonIcon className={"fill-dark"} />
					) : (
						<SunIcon className={"fill-dark"} />
					)}
				</button>
			</nav>

			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
