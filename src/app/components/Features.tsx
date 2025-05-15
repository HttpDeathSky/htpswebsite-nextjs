"use client";
import { useState, useEffect } from "react";
import Slide from "./Features-B-Slide";
import Boxes from "./Features-C-Gsap";

const codeText = `1 <div className={\`border-b-1 border-gray-950/5 dark:border-white/10 h-full w-full flex
2\tjustify-between px-8 text-sm text-shadow-sm\`}>
3 \t<p className="flex items-center text-xl font-italic font-bold">
4 \t\t<Image onClick={() => {
5 \t\t\twindow.scrollTo({
6 \t\t\t\ttop: 0,
7 \t\t\t\tbehavior: 'smooth',
8 \t\t\t});
9 \t\t}}
10 \t\t\tclassName="mr-2 cursor-pointer"
11 \t\t\tsrc={skyIcon}
12 \t\t\talt="Sky"
13 \t\t\twidth={48}
14 \t\t\theight={48} />
15 \t\tDesign By HtpSpace
16 \t</p>
17 \t<p className="flex items-center">
18 \t\t<Link className="mx-4 hover:underline" href="/">Docs</Link>
19 \t\t<Link className="mx-4 hover:underline" href="/">Blog</Link>
20 \t\t<Link className="ml-4 hover:underline" href="/">ShowCase</Link>
21 \t\t<Image
22 \t\t\t........`;

export default function Features() {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const typingInterval = setInterval(() => {
			setDisplayedText((prev) => prev + codeText.charAt(index));
			setIndex((prev) => prev + 1);
		}, 50);

		if (index >= codeText.length) {
			clearInterval(typingInterval);
			setTimeout(() => {
				setDisplayedText("");
				setIndex(0);
			}, 10000);
		}

		return () => clearInterval(typingInterval);
	}, [index]);

	return (
		<div
			className={`flex h-440 flex-col border-b-1 border-gray-950/5 dark:border-white/10`}
		>
			{/* Up Space */}
			<div className="border-b-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<h1 className="pt-19 pb-1 pl-1 text-sm tracking-wide text-black/60 dark:text-white/60">
							text-8xl text-gray-950 tracking-tighter text-balance
						</h1>
					</div>
				</div>
			</div>
			{/* Title */}
			<div
				className={`htps-bg-line mx-[7.5%] border-x-1 border-gray-950/5 dark:border-white/10`}
			>
				<div
					className={`mx-[2.3%] flex h-full flex-col border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
				>
					<h1 className="my-1 ml-1 text-8xl tracking-tighter text-balance">
						Rapidly build modern websites without ever leaving your HTML.
					</h1>
				</div>
			</div>
			{/* middle Space 1 */}
			<div className="border-t-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<h1 className="pt-5 pb-1 pl-1 text-sm tracking-wide text-black/60 dark:text-white/60">
							text-lg text-gray-950 font-medium
						</h1>
					</div>
				</div>
			</div>
			{/* middle Space 2 */}
			<div className="border-t-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<h1 className="p-2 text-lg/7 font-medium tracking-wide text-gray-600 dark:text-white/60">
							A utility-first CSS framework packed with classes like flex, pt-4,
							text-center
							<br />
							and rotate-90 that can be composed to build any design, directly
							in your markup. Get started Quick search Ctrl K
						</h1>
					</div>
				</div>
			</div>
			{/* middle Space 3 */}
			<div className="border-t-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<h1 className="pt-9 pb-1 pl-1 text-sm tracking-wide text-black/60 dark:text-white/60"></h1>
					</div>
				</div>
			</div>
			{/* Section 1 */}
			<div className="border-y-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white py-[1%] dark:border-white/10 dark:bg-black`}
					>
						<div className="flex h-full w-full flex-row justify-between">
							{/* Code Simulate */}
							<div className="ml-[4%] h-[493px] w-[67%] overflow-hidden rounded-lg shadow-lg">
								{/* Simulate Mac Window */}
								<div className="flex items-center justify-start bg-gray-200 px-4 py-2 dark:bg-gray-900">
									<span className="mr-2 h-3 w-3 rounded-full bg-red-500"></span>
									<span className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></span>
									<span className="h-3 w-3 rounded-full bg-green-500"></span>
								</div>
								{/* Code Body */}
								<div className="h-full overflow-auto bg-gray-100 px-4 pt-4 font-mono text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-100">
									<pre className="">
										<code className="">
											{displayedText}
											<span className="animate-pulse">|</span>
										</code>
									</pre>
								</div>
							</div>
							{/* Description Space */}
							<div className="mx-[4%] w-[40%] p-[2%]">
								<p className="overflow-hidden text-6xl">
									Dont know what to write
									<br />
									Set three lines of code
									<br />
									And then it will be displayed
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* middle Space 4 */}
			<div className="border-b-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<h1 className="pt-9 pb-1 pl-1 text-sm tracking-wide text-black/60 dark:text-white/60"></h1>
					</div>
				</div>
			</div>
			{/* Section 2 */}
			<div
				className={`htps-bg-line mx-[7.5%] border-x-1 border-gray-950/5 dark:border-white/10`}
			>
				<div
					className={`mx-[2.3%] h-88 border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
				>
					<Slide />
				</div>
			</div>
			{/* middle Space 5 */}
			<div className="border-y-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<h1 className="pt-9 pb-1 pl-1 text-sm tracking-wide text-black/60 dark:text-white/60"></h1>
					</div>
				</div>
			</div>
			{/* Section 3 */}
			<div
				className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
			>
				<div
					className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
				>
					<Boxes />
				</div>
			</div>
		</div>
	);
}
