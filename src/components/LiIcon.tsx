"use client"
import React, { RefObject } from "react";
import { motion, useScroll } from "framer-motion";

type Props = {
	reference: RefObject<HTMLLIElement>;
};

const LiIcon = ({ reference }: Props) => {
	const { scrollYProgress } = useScroll({
		layoutEffect: false,
		target: reference,
		offset: ["center end", "center center"],
	});
	return (
		<figure className="absolute left-0 stroke-dark dark:stroke-light">
			<svg width={75} height={75} viewBox="0 0 100 100" className="-rotate-90">
				<title>Circle</title>
				<circle
					cx={75}
					cy={50}
					r={20}
					className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
				/>
				<motion.circle
					cx={75}
					cy={50}
					r={20}
					className="stroke-[5px] fill-light dark:fill-dark"
					style={{
						pathLength: scrollYProgress,
					}}
				/>
				<circle cx={75} cy={50} r={10} className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
			</svg>
		</figure>
	);
};

// LiIcon.displayName = "LiIcon";

export default LiIcon;
