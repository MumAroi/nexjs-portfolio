"use client"
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

type Props = {};

const Detail = ({
	position,
	company,
	companyLink,
	time,
	address,
	work,
}: {
	position: string;
	company: string;
	companyLink: string;
	time: string;
	address: string;
	work: string;
}) => {
	const ref = useRef<HTMLLIElement>(null);
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className="capitalize font-bold text-2xl">
					{position}&nbsp;
					<a
						href={companyLink}
						target="_blank"
						className="text-primary capitalize"
						rel="noreferrer"
					>
						@{company}
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75">
					{time} | {address}
				</span>
				<p className="font-medium w-full">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = (props: Props) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		layoutEffect: false,
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 w-full text-center">
				Experience
			</h2>
			<div ref={ref} className="w-[75%] mx-auto relative">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
				/>
				<ul className="w-full flex- flex-com items-start justify-between ml-4">
					<Detail
						position="Software Engineer"
						company="Google"
						time="2022-Present"
						address="Mountain View, CA"
						work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
						companyLink="www.google.com"
					/>
					<Detail
						position="Intern"
						company="Facebook"
						time="Summer 2021"
						address=" Menlo Park, CA."
						work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
						companyLink="www.google.com"
					/>
					<Detail
						position="Software Developer"
						company="Amazon"
						time="2020-2021"
						address="Seattle, WA."
						work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
						companyLink="www.google.com"
					/>
					<Detail
						position="Software Developer Intern"
						company="Microsoft"
						time="Summer 2019"
						address="Redmond, WA."
						work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component."
						companyLink="www.google.com"
					/>
					<Detail
						position="Teaching Assistant"
						company="MIT"
						time="Fall 2018"
						address="Massachusetts Ave, Cambridge, MA."
						work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
						companyLink="www.google.com"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
