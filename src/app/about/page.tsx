"use client";
import React, { useEffect, useRef } from "react";
// import type { Metadata } from "next";
import AnimateText from "@/components/AnimateText";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

type Props = {};

const AnimateNumbers = ({ value }: { value: number }) => {
	const ref = useRef<HTMLSpanElement | null>(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref} />;
};

// export const metadata: Metadata = {
// 	title: "CodeBuck | About Page",
// 	description: "",
// };

const AboutPage = (props: Props) => {
	return (
		<div className="flex w-full flex-col items-center justify-center">
			<div className="z-0 inline-block h-full w-full bg-light p-32 pt-16">
				<AnimateText text="Passion Fuels Purpose!" className="mb-16" />
				<div className="grid w-full grid-cols-8 gap-16">
					<div className="col-span-3 flex-col items-start justify-start">
						<h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
							Biography
						</h2>
						<p className="font-medium">
							Hi, I'm CodeBucks, a web developer and UI/UX designer with a
							passion for creating beautiful, functional, and user-centered
							digital experiences. With 4 years of experience in the field. I am
							always looking for new and innovative ways to bring my clients'
							visions to life.
						</p>
						<p className="my-4 font-medium">
							I believe that design is about more than just making things look
							pretty – it's about solving problems and creating intuitive,
							enjoyable experiences for users.
						</p>
						<p className="font-medium">
							Whether I'm working on a website, mobile app, or other digital
							product, I bring my commitment to design excellence and
							user-centered thinking to every project I work on. I look forward
							to the opportunity to bring my skills and passion to your next
							project.
						</p>
					</div>
					<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
						<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
						<Image
							src="/images/profile/developer-pic-2.jpg"
							alt="image"
							className="w-full h-auto"
							width={0}
							height={0}
							sizes="100vw"
						/>
					</div>
					<div className="col-span-2 flex flex-col items-end justify-between">
						<div className="flex flex-col items-end justify-between">
							<span className="inline-block text-7xl font-bold">
								<AnimateNumbers value={50} />+
							</span>
							<h2 className="text-xl font-medium capitalize text-dark/75">
								satisfied clients
							</h2>
						</div>
						<div className="flex flex-col items-end justify-between">
							<span className="inline-block text-7xl font-bold">
								<AnimateNumbers value={40} />+
							</span>
							<h2 className="text-xl font-medium capitalize text-dark/75">
								projects completed
							</h2>
						</div>
						<div className="flex flex-col items-end justify-between">
							<span className="inline-block text-7xl font-bold">
								<AnimateNumbers value={4} />+
							</span>
							<h2 className="text-xl font-medium capitalize text-dark/75">
								year of experience
							</h2>
						</div>
					</div>
				</div>
				<Skills />
			</div>
		</div>
	);
};

export default AboutPage;
