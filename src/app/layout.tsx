// 'use client';
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import MouseTrail from './components/MouseTrail';

const monaSans = localFont({
	src: [
		// 常规字重
		{
			path: "../../public/fonts/Mona Sans/WOFF 2/MonaSans-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		// 粗体
		{
			path: "../../public/fonts/Mona Sans/WOFF 2/MonaSans-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		// 半粗体
		{
			path: "../../public/fonts/Mona Sans/WOFF 2/MonaSans-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		// 轻量
		{
			path: "../../public/fonts/Mona Sans/WOFF 2/MonaSans-Light.woff2",
			weight: "300",
			style: "normal",
		},
		// 常规斜体
		{
			path: "../../public/fonts/Mona Sans/WOFF 2/MonaSans-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		// 粗体斜体
		{
			path: "../../public/fonts/Mona Sans/WOFF 2/MonaSans-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-mona",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={monaSans.variable}>
				<ThemeProvider attribute="class">
					<MouseTrail />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
