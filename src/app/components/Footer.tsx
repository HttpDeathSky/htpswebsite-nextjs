"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="h-47">
			<div className={`h-36 border-b-1 border-black/9 dark:border-white/9`}>
				<div
					className={`htps-bg-line mx-[11%] h-full border-x-1 border-black/9 dark:border-white/9`}
				>
					<div
						className={`mx-[2%] flex h-full border-x-1 border-black/9 bg-white dark:border-white/9 dark:bg-black`}
					>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml mb-1 font-bold">Learn</p>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Documentation
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Showcase
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Blog
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Playground
							</Link>
						</div>
						<div
							className={`w-7 border-x-1 border-black/9 dark:border-white/9`}
						/>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml font-bold">Tailwind Plus</p>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								UI Blocks
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Templates
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								UI Kit
							</Link>
						</div>
						<div
							className={`w-7 border-x-1 border-black/9 dark:border-white/9`}
						/>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml font-bold">Resources</p>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Refactoring UI
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Headless UI
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Heroicons
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Hero Patterns
							</Link>
						</div>
						<div
							className={`w-7 border-x-1 border-black/9 dark:border-white/9`}
						/>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml font-bold">Community</p>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								GitHub
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								Discord
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/website">
								X
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="h-full">
				<div
					className={`htps-bg-line mx-[11%] h-full border-x-1 border-black/9 dark:border-white/9`}
				>
					<div
						className={`mx-[2%] h-full border-x-1 border-black/9 bg-white dark:border-white/9 dark:bg-black`}
					>
						<div className="flex h-full flex-col items-end justify-end pr-10 pb-8">
							Build With Nextjs && Tailwind
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
