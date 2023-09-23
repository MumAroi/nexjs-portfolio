import AnimateText from "@/components/AnimateText";
import HierMe from "@/components/HierMe";
import { LinkArrow } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="z-0 inline-block h-full w-full bg-light p-32 !pt-0">
			<div className="flex w-full items-start justify-between">
				<div className="w-1/2">
					<Image
						src="/images/profile/developer-pic-1.png"
						width="580"
						height="580"
						sizes="100vw"
						alt="CodeBuck"
						className="w-full h-auto"
					/>
				</div>
				<div className="w-1/2 flex flex-col items-center self-center">
					<AnimateText
						text="Turning Vision Into Reality With Code And Design."
						className="!text-6xl !text-left"
					/>
					<p className="my-4 text-base font-medium">
						As a skilled full-stack developer, I am dedicated to turning ideas
						into innovative web applications. Explore my latest projects and
						articles, showcasing my expertise in React.js and web development.
					</p>
					<div className="flex items-center self-start mt-2">
						<Link
							href="/dummy.pdf"
							target={"_blank"}
							download={true}
							className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark "
						>
							Resume
							<LinkArrow className="w-6 ml-1" />
						</Link>
						<Link
							href="paramas.wae.th@gmail.com"
							className="ml-4 text-lg font-medium capitalize text-dark underline"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
			<HierMe />
			<div className="absolute right-8 bottom-8 inline-block w-24">
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
