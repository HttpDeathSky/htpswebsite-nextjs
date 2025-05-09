"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="h-47">
			<div className={`h-36 border-b-1 border-gray-950/5 dark:border-white/10`}>
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] flex h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml mb-1 font-bold">Learn</p>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Documentation
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Showcase
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Blog
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Playground
							</Link>
						</div>
						<div
							className={`w-7 border-x-1 border-gray-950/5 dark:border-white/10`}
						/>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml font-bold">Tailwind Plus</p>
							<Link className="mb-1 text-sm hover:underline" href="/">
								UI Blocks
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Templates
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								UI Kit
							</Link>
						</div>
						<div
							className={`w-7 border-x-1 border-gray-950/5 dark:border-white/10`}
						/>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml font-bold">Resources</p>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Refactoring UI
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Headless UI
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Heroicons
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Hero Patterns
							</Link>
						</div>
						<div
							className={`w-7 border-x-1 border-gray-950/5 dark:border-white/10`}
						/>
						<div className="flex flex-1 flex-col pt-4 pr-20 pl-2">
							<p className="text-ml font-bold">Community</p>
							<Link className="mb-1 text-sm hover:underline" href="/">
								GitHub
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								Discord
							</Link>
							<Link className="mb-1 text-sm hover:underline" href="/">
								X
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="h-full">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
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
