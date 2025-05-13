"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Boxes() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.fromTo(
				container.current,
				{ x: -200, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1,
					scrollTrigger: {
						trigger: container.current,
						start: "top 80%", // 元素进入视口 80% 时触发
						end: "top 30%",
						scrub: true, // 滚动进度与动画同步
					},
				},
			);
		},
		{ dependencies: [] },
	);

	return (
		<div
			ref={container}
			className="flex h-40 w-40 items-center justify-center rounded-lg bg-green-500 text-white shadow-lg"
		>
			Hello
		</div>
	);
}
