import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio | Article Page",
	description: "",
};

export default function ArticleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
