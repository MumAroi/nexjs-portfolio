import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
	return (
		<motion.div
			className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x, y }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
		>
			{name}
		</motion.div>
	);
};

const Skills = (props: Props) => {
	return (
		<>
			<h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
					whileHover={{ scale: 1.05 }}
				>
					Web
				</motion.div>
				<Skill name="HTML" x="-25vw" y="2vw" />
				<Skill name="CSS" x="-5vw" y="-10vw" />
				<Skill name="Javascript" x="20vw" y="6vw" />
				<Skill name="ReactJS" x="0vw" y="12vw" />
				<Skill name="NextJS" x="-20vw" y="-15vw" />
				<Skill name="Docker" x="15vw" y="-12vw" />
				<Skill name="Web Design" x="32vw" y="-5vw" />
				<Skill name="NestJS" x="0vw" y="-20vw" />
				<Skill name="Firebase" x="-25vw" y="18vw" />
				<Skill name="Tailwind CSS" x="18vw" y="18vw" />
				<Skill name="GitHub" x="-35vw" y="-5vw" />
			</div>
		</>
	);
};

export default Skills;
