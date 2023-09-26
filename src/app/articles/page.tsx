"use client";
import React, { MouseEventHandler, useRef } from "react";
import AnimateText from "@/components/AnimateText";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

type Props = {};

const FramerImage = motion(Image);

const MovingImg = ({
	image,
	title,
	link,
}: {
	image: string;
	title: string;
	link: string;
}) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const imageRef = useRef<HTMLImageElement>(null);

	function handleMound(event: React.MouseEvent<HTMLAnchorElement>) {
		if (imageRef.current) {
			imageRef.current.style.display = "inline-block";
		}
		x.set(event.pageX);
		y.set(-10);
	}

	function handleMoundLeave(event: React.MouseEvent<HTMLAnchorElement>) {
		if (imageRef.current) {
			imageRef.current.style.display = "none";
		}
		x.set(0);
		y.set(0);
	}

	return (
		<Link
			href={link}
			target={"_blank"}
			onMouseMove={handleMound}
			onMouseLeave={handleMoundLeave}
		>
			<h2 className="capitalize text-xl font-semibold hover:underline">
				{title}
			</h2>
			<FramerImage
				style={{ x, y }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
				ref={imageRef}
				src={image}
				alt={title}
				width={1280}
				height={720}
				loading="lazy"
				className="z-10 w-96 h-auto hidden absolute rounded-lg"
			/>
		</Link>
	);
};

const FeatureArticle = ({
	image,
	title,
	time,
	summary,
	link,
}: {
	image: string;
	title: string;
	time: string;
	summary: string;
	link: string;
}) => {
	return (
		<li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
			<Link
				href={link}
				target={"_blank"}
				className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
			>
				<FramerImage
					src={image}
					alt={title}
					className="w-full h-auto"
					width={1280}
					height={720}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
					priority
				/>
			</Link>
			<Link href={link} target={"_blank"}>
				<h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
					{title}
				</h2>
			</Link>
			<p className="text-sm mb-2">{summary}</p>
			<span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
		</li>
	);
};

const Article = ({
	image,
	title,
	date,
	link,
}: {
	image: string;
	title: string;
	date: string;
	link: string;
}) => {
	return (
		<motion.li
			className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
			initial={{ y: 200 }}
			whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
			viewport={{ once: true }}
		>
			<MovingImg title={title} link={link} image={image} />
			<span className="text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
		</motion.li>
	);
};

const ArticlePage = (props: Props) => {
	return (
		<div className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
			<div className="z-0 inline-block h-full w-ful p-32 pt-16">
				<AnimateText text="Words Can Change The World!" className="mb-16" />
				<ul className="grid grid-cols-2 gap-12">
					<FeatureArticle
						title="Build A Custom Pagination Component In Reactjs From Scratch"
						summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
						time="9 min read"
						link="/"
						image="/images/articles/pagination component in reactjs.jpg"
					/>
					<FeatureArticle
						title="Build A Custom Pagination Component In Reactjs From Scratch"
						summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
						time="9 min read"
						link="/"
						image="/images/articles/pagination component in reactjs.jpg"
					/>
				</ul>
				<h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
					All Article
				</h2>
				<ul>
					<Article
						title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
						date="March 22, 2023"
						image="/images/articles/create modal component in react using react portals.png"
						link="/"
					/>
					<Article
						title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
						date="March 22, 2023"
						image="/images/articles/create modal component in react using react portals.png"
						link="/"
					/>
					<Article
						title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
						date="March 22, 2023"
						image="/images/articles/create modal component in react using react portals.png"
						link="/"
					/>
					<Article
						title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
						date="March 22, 2023"
						image="/images/articles/create modal component in react using react portals.png"
						link="/"
					/>
					<Article
						title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
						date="March 22, 2023"
						image="/images/articles/create modal component in react using react portals.png"
						link="/"
					/>
				</ul>
			</div>
		</div>
	);
};

export default ArticlePage;
