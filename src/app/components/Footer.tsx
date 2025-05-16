"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex flex-none flex-col">
			{/* footer top */}
			<div
				className={`flex-1 border-b-1 border-gray-950/5 dark:border-white/10`}
			>
				{/* tattoo */}
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					{/* main */}
					<div
						className={`mx-[2.3%] grid h-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 overflow-auto border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						{/* Link Space 1 */}
						<div className="flex flex-col border-gray-950/5 pt-4 pr-2 pl-2 dark:border-white/10">
							<p className="text-ml mb-1 font-bold">Learn</p>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Documentation
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Showcase
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Blog
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Playground
								</Link>
							</div>
						</div>
						{/* <div
							className={`w-7 border-x-1 border-gray-950/5 dark:border-white/10`}
						/> */}
						{/* Link Space 2 */}
						<div className="flex flex-col border-gray-950/5 pt-4 pr-2 pl-2 dark:border-white/10">
							<p className="text-ml font-bold">Tailwind Plus</p>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									UI Blocks
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Templates
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									UI Kit
								</Link>
							</div>
						</div>
						{/* <div
							className={`w-7 border-x-1 border-gray-950/5 dark:border-white/10`}
						/> */}
						{/* Link Space 3 */}
						<div className="flex flex-col border-gray-950/5 pt-4 pr-2 pl-2 dark:border-white/10">
							<p className="text-ml font-bold">Resources</p>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Refactoring UI
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Headless UI
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Heroicons
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Hero Patterns
								</Link>
							</div>
						</div>
						{/* <div
							className={`w-7 border-x-1 border-gray-950/5 dark:border-white/10`}
						/> */}
						{/* Link Space 4 */}
						<div className="flex flex-col border-gray-950/5 pt-4 pr-2 pl-2 dark:border-white/10">
							<p className="text-ml font-bold">Community</p>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									GitHub
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									Discord
								</Link>
							</div>
							<div>
								<Link className="mb-1 text-sm hover:underline" href="/">
									X
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* footer bottom */}
			<div className="flex-1">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<div className="flex h-full flex-col items-end justify-end pt-24 pr-10 pb-8">
							Build With Nextjs && Tailwind
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
