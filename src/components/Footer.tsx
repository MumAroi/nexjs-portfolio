import Link from "next/link";
import React from "react";

type Props = {};

function Footer(props: Props) {
	return (
		<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
			<div className="z-0 h-full w-full p-32 py-8 flex items-center justify-between">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
				<div className="flex items-center">
					Build With
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span>
					by&nbsp;
					<Link href="www.google.com" className="underline underline-offset-2">
						Refill
					</Link>
				</div>
				<Link href="/" target={"_blank"}  className="underline underline-offset-2">Say Hello</Link>
			</div>
		</footer>
	);
}

export default Footer;
