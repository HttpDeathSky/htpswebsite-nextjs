"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// 主题相关函数
	const getThemeIcons = () => ({
		catIcon:
			theme === "dark"
				? "/website/svg/cat-kitty-white.svg"
				: "/website/svg/cat-kitty-black.svg",
		skyIcon:
			theme === "dark"
				? "/website/svg/sky-svgrepo-white.svg"
				: "/website/svg/sky-svgrepo-black.svg",
	});

	// 菜单动画控制
	useGSAP(() => {
		if (open) {
			gsap.fromTo(
				menuRef.current,
				{ opacity: 0, y: -20, scale: 0.95 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
			);
		}
	}, [open]);

	// 点击外部关闭菜单
	useEffect(() => {
		if (!mounted) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [mounted]);

	// 初始化挂载状态
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const { catIcon, skyIcon } = getThemeIcons();

	// 渲染导航链接
	const renderNavLinks = (isMobile = false) => (
		<>
			<Link
				className={`${isMobile ? "mb-4 flex justify-end" : "mx-4"} hover:underline`}
				href="/"
			>
				<span>Docs</span>
			</Link>
			<Link
				className={`${isMobile ? "mb-4 flex justify-end" : "mx-4"} hover:underline`}
				href="/"
			>
				<span>Blog</span>
			</Link>
			<Link
				className={`${isMobile ? "flex justify-end" : "ml-4"} hover:underline`}
				href="/updateLog"
			>
				<span>UpdateLog</span>
			</Link>
		</>
	);

	return (
		<div className="sticky top-0 z-50 flex h-14 flex-none justify-between border-b-1 border-gray-950/5 bg-white px-8 text-sm text-shadow-sm dark:border-white/10 dark:bg-black">
			{/* Logo 区域 */}
			<div className="flex items-center text-xl">
				<Image
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="mr-2 cursor-pointer"
					src={skyIcon}
					alt="Sky"
					width={48}
					height={48}
				/>
				<Link className="font-italic hidden font-bold md:block" href="/">
					HtpSpace
				</Link>
				<Link className="font-italic font-bold md:hidden" href="/">
					HT
				</Link>
			</div>

			{/* 导航区域 */}
			<div className="flex items-center">
				{/* PC端导航 */}
				<div className="hidden md:block">{renderNavLinks()}</div>

				{/* 移动端导航 */}
				<div
					className="relative inline-block text-left md:hidden"
					ref={containerRef}
				>
					<Image
						onClick={() => setOpen((prev) => !prev)}
						src="/website/svg/globe.svg"
						alt="globe"
						width={22}
						height={22}
						className="mt-1"
					/>
					{open && (
						<div
							ref={menuRef}
							className="absolute right-0 z-10 mt-[22%] flex flex-col rounded-lg bg-white/30 p-[20%] backdrop-blur-md"
						>
							{renderNavLinks(true)}
						</div>
					)}
				</div>

				{/* 主题切换按钮 */}
				<Image
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="ml-3 cursor-pointer"
					src={catIcon}
					alt="Cat"
					width={32}
					height={32}
				/>
			</div>
		</div>
	);
}
