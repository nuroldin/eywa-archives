import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
	src: [
		{ path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
		{ path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
		{
			path: "/fonts/IBMPlexSans-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{ path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
	],
});

const BebasNeue = localFont({
	src: [
		{ path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
	],
	variable: "--bebas-neue",
});

export const metadata: Metadata = {
	title: "Eywa Archives",
	description:
		"Eywa Archives is a book borrowing university library management solution.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html className="dark" lang="en" suppressHydrationWarning>
			<body
				className={`${ibmPlexSans.className} ${BebasNeue.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
