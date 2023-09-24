import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CodeBuck | About Page",
	description: "",
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
