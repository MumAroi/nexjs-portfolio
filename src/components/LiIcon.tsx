import React, { RefObject } from "react";
import { motion, useScroll } from "framer-motion";

type Props = {
	reference: RefObject<HTMLLIElement>;
};

const LiIcon = ({ reference }: Props) => {
	const { scrollYProgress } = useScroll({
		target: reference,
		offset: ["center end", "center center"],
	});
	return (
		<figure className="absolute left-0 stroke-dark">
			<svg width={75} height={75} viewBox="0 0 100 100" className="-rotate-90">
				<title>Circle</title>
				<circle
					cx={75}
					cy={50}
					r={20}
					className="stroke-primary stroke-1 fill-none"
				/>
				<motion.circle
					cx={75}
					cy={50}
					r={20}
					className="stroke-[5px] fill-light"
					style={{
						pathLength: scrollYProgress,
					}}
				/>
				<circle cx={75} cy={50} r={10} className="animate-pulse stroke-1 fill-primary" />
			</svg>
		</figure>
	);
};

// LiIcon.displayName = "LiIcon";

export default LiIcon;
