"use client"
import AnimateText from "@/components/AnimateText";
import { GithubIcon } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

type Props = {};

const FeaturedProject = ({
	type,
	title,
	summary,
	image,
	link,
	github,
}: {
	type: string;
	title: string;
	summary: string;
	image: string;
	link: string;
	github: string;
}) => {
	return (
		<article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
			<Link
				href={link}
				target={"_blank"}
				className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
			>
				<FramerImage
					src={image}
					alt={title}
					className="w-full h-auto"
					loading={"lazy"}
					width={1280}
					height={720}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				/>
			</Link>
			<div className="w-1/2 flex flex-col items-start justify-between pl-6">
				<span className="text-primary font-medium text-xl">{type}</span>
				<Link
					href={link}
					target={"_blank"}
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
				</Link>
				<p className="my-2 font-medium text-dark ">{summary}</p>
				<div className="mt-2 flex items-center">
					<Link href={github} target={"_blank"} className="w-10">
						<GithubIcon />
					</Link>
					<Link
						href={github}
						target={"_blank"}
						className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
					>
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({
	type,
	title,
	image,
	link,
	github,
}: {
	type: string;
	title: string;
	image: string;
	link: string;
	github: string;
}) => {
	return (
		<article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
			<Link
				href={link}
				target={"_blank"}
				className="w-full cursor-pointer overflow-hidden rounded-lg"
			>
				<FramerImage
					src={image}
					alt={title}
					className="w-full h-auto"
					loading={"lazy"}
					width={1280}
					height={720}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				/>
			</Link>
			<div className="w-full flex flex-col items-start justify-between mt-4">
				<span className="text-primary font-medium text-xl">{type}</span>
				<Link
					href={link}
					target={"_blank"}
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
				</Link>
				<div className="w-full mt-2 flex items-center justify-between">
					<Link
						href={github}
						target={"_blank"}
						className="text-lg font-semibold underline"
					>
						Visit
					</Link>
					<Link href={github} target={"_blank"} className="w-8">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const ProjectPage = (props: Props) => {
	return (
		<div className="w-full mb-16 flex flex-col items-center justify-center">
			<div className="z-0 inline-block h-full w-full bg-light p-32 pt-16">
				<AnimateText text="Imagination Trumps Knowledge!" className="mb-16" />
				<div className="grid grid-cols-12 gap-24 gap-y-32">
					<div className="col-span-12">
						<FeaturedProject
							title="Crypto Screener Application"
							summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
							link="/"
							github="/"
							image="/images/projects/crypto-screener-cover-image.jpg"
							type="Featured Project"
						/>
					</div>
					<div className="col-span-6">
						<Project
							title="Crypto Screener Application"
							link="/"
							github="/"
							image="/images/projects/crypto-screener-cover-image.jpg"
							type="Featured Project"
						/>
					</div>
					<div className="col-span-6">
						<Project
							title="Crypto Screener Application"
							link="/"
							github="/"
							image="/images/projects/crypto-screener-cover-image.jpg"
							type="Featured Project"
						/>
					</div>
					<div className="col-span-12">
						<FeaturedProject
							title="React Portfolio Website"
							summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
							link="/"
							github="/"
							image="/images/projects/crypto-screener-cover-image.jpg"
							type="Featured Project"
						/>
					</div>
					<div className="col-span-6">
						<Project
							title="React Portfolio Website"
							link="/"
							github="/"
							image="/images/projects/crypto-screener-cover-image.jpg"
							type="Featured Project"
						/>
					</div>
					<div className="col-span-6">
						<Project
							title="React Portfolio Website"
							link="/"
							github="/"
							image="/images/projects/crypto-screener-cover-image.jpg"
							type="Featured Project"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
