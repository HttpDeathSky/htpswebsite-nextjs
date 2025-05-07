"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	// dynamic pic
	const catIcon =
		theme === "dark"
			? "/website/cat-kitty-white.svg"
			: "/website/cat-kitty-black.svg";
	const skyIcon =
		theme === "dark"
			? "/website/sky-svgrepo-white.svg"
			: "/website/sky-svgrepo-black.svg";
	return (
		<div className={`sticky top-0 z-50 h-14 bg-white dark:bg-black`}>
			<div
				className={`flex h-full w-full justify-between border-b-1 border-black/9 px-8 text-sm text-shadow-sm dark:border-white/9`}
			>
				<p className="font-italic flex items-center text-xl font-bold">
					<Image
						onClick={() => {
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						}}
						className="mr-2 cursor-pointer"
						src={skyIcon}
						alt="Sky"
						width={48}
						height={48}
					/>
					Design By HtpSpace
				</p>
				<p className="flex items-center">
					<Link className="mx-4 hover:underline" href="/website">
						Docs
					</Link>
					<Link className="mx-4 hover:underline" href="/website">
						Blog
					</Link>
					<Link className="ml-4 hover:underline" href="/website">
						ShowCase
					</Link>
					<Image
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className="ml-6 cursor-pointer"
						src={catIcon}
						alt="Cat"
						width={32}
						height={32}
					/>
				</p>
			</div>
		</div>
	);
}
