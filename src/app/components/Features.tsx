"use client";
import { useState, useEffect } from "react"; // 确保有这行

const codeText = `1 <div className={\`border-b-1 border-black/9 dark:border-white/9 h-full w-full flex
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
			className={`flex h-330 flex-col border-b-1 border-black/9 dark:border-white/9`}
		>
			{/* Up Space */}
			<div className="h-[16%] border-b-1 border-black/9 dark:border-white/9">
				<div
					className={`htps-bg-line mx-[11%] h-full border-x-1 border-black/9 dark:border-white/9`}
				>
					<div
						className={`mx-[2%] h-full border-x-1 border-black/9 bg-white dark:border-white/9 dark:bg-black`}
					>
						<h1 className="pt-13 text-sm tracking-wide text-gray-500 dark:text-gray-300">
							text-8xl text-gray-950 tracking-tighter text-balance
						</h1>
					</div>
				</div>
			</div>
			{/* Title */}
			<div
				className={`htps-bg-line mx-[11%] border-x-1 border-black/9 dark:border-white/9`}
			>
				<div
					className={`mx-[2%] flex h-full flex-col border-x-1 border-black/9 bg-white dark:border-white/9 dark:bg-black`}
				>
					<h1 className="my-[3%] ml-[4%] overflow-hidden text-7xl tracking-tighter text-balance">
						Rapidly build modern websites without ever leaving your HTML.
					</h1>
				</div>
			</div>
			{/* Section 1 */}
			<div className="border-y-1 border-black/9 dark:border-white/9">
				<div
					className={`htps-bg-line mx-[11%] border-x-1 border-black/9 dark:border-white/9`}
				>
					<div
						className={`mx-[2%] h-full border-x-1 border-black/9 bg-white py-[1%] dark:border-white/9 dark:bg-black`}
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
											{/* `}<span className=''>{``}</span>{` */}
											{/* text-pink-500 dark:text-pink-300 */}
											{/* text-blue-500 dark:text-blue-300 */}
											{/* {`<`}<span className='text-pink-500 dark:text-pink-300'>{`div`}</span>{` `}<span className='text-blue-500 dark:text-blue-300'>{`className`}</span>{`={\`border-b-1 border-black/9 dark:border-white/9 h-full w-full`} */}
											{/* {` flex\n\t\tjustify-between px-8 text-sm text-shadow-sm\`}`} */}
											{/* {`\n\t<`}<span className='text-pink-500 dark:text-pink-300'>{`p`}</span>{` `}<span className='text-blue-500 dark:text-blue-300'>{`className`}</span>{`="flex items-center text-xl font-italic font-bold">`} */}
											{/* {`\n\t\t<`}<span className='text-pink-500 dark:text-pink-300'>{`Image`}</span>{` `}<span className='text-blue-500 dark:text-blue-300'>{`onClick`}</span>{`={() => {`} */}
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
			{/* Section 2 */}
			<div
				className={`htps-bg-line mx-[11%] h-full border-x-1 border-black/9 dark:border-white/9`}
			>
				<div
					className={`mx-[2%] flex h-full flex-col border-x-1 border-black/9 bg-white dark:border-white/9 dark:bg-black`}
				></div>
			</div>
		</div>
	);
}
