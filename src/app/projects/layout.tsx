import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CodeBuck | Projects Page",
	description: "",
};

export default function ProjectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
