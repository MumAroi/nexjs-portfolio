"use client";
import Link from "next/link";
import React from "react";

type Props = {};

function Footer(props: Props) {
	return (
		<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
			<div className="z-0 h-full w-full py-8 flex items-center justify-between lg:flex-col lg:py-6 px-10">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
				<div className="flex items-center lg:py-2">
					Build With
					<span className="text-primary text-2xl px-1 dark:text-primaryDark">
						&#9825;
					</span>
					by&nbsp;
					<Link href="www.google.com" className="underline underline-offset-2">
						Refill
					</Link>
				</div>
				<Link
					href="/"
					target={"_blank"}
					className="underline underline-offset-2"
				>
					Say Hello
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
