"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
	text: string;
	className?: string;
};

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const AnimateText = ({ text, className }: Props) => {
	return (
		<div className="w-full max-auto py-2 items-center justify-center text-center overflow-hidden">
			<motion.h1
				className={`${className} inline-block w-full text-dark font-bold capitalize text-8xl`}
				variants={quote}
				initial="initial"
				animate="animate"
			>
				{text.split(" ").map((word, index) => {
					return (
						<motion.span
							variants={singleWord}
							key={`${word}-${index}`}
							className="inline-block"
						>
							{word}&nbsp;
						</motion.span>
					);
				})}
			</motion.h1>
		</div>
	);
};

export default AnimateText;
