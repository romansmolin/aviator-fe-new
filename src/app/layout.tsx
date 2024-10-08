import type { Metadata } from "next";
import { Inter, Trispace } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import MainContent from "@/components/main-content";
import Header from "@/components/header";
import Providers from "./_providers";

const inter = Inter({ subsets: ["latin"] });
const trispace = Trispace({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={trispace.className}>
				<Providers>
					<div className="grid min-h-screen w-full">
						<Sidebar />
						<div className="flex lg:ml-64 flex-col flex-grow ">
							<Header />
							<MainContent>
								{children}
							</MainContent>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
