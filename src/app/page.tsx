import AnimateText from "@/components/AnimateText";
import HierMe from "@/components/HierMe";
import { LinkArrow } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="z-0 inline-block h-full w-full pt-0 md:pt-16 sm:pt-8">
			<div className="flex w-full items-center justify-between lg:flex-col">
				<div className="w-1/2 md:w-full">
					<Image
						src="/images/profile/developer-pic-1.png"
						alt="CodeBuck"
						className="w-full h-auto lg:hidden md:inline-block md:w-full"
						width="580"
						height="580"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
						priority
					/>
				</div>
				<div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
					<AnimateText
						text="Turning Vision Into Reality With Code And Design."
						className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
					/>
					<p className="my-4 text-base font-medium md:text-sm sm:text-xs">
						As a skilled full-stack developer, I am dedicated to turning ideas
						into innovative web applications. Explore my latest projects and
						articles, showcasing my expertise in React.js and web development.
					</p>
					<div className="flex items-center self-start mt-2 lg:self-center">
						<Link
							href="/dummy.pdf"
							target={"_blank"}
							download={true}
							className="flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:bg-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
						>
							Resume
							<LinkArrow className="w-6 ml-1" />
						</Link>
						<Link
							href="paramas.wae.th@gmail.com"
							className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
			<HierMe />
			<div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
				<Image
					src="/images/svgs/miscellaneous_icons_1.svg"
					alt="images"
					loading="lazy"
					width="38"
					height="65"
					sizes="100vw"
					className="h-auto w-full"
				/>
			</div>
		</div>
	);
}
