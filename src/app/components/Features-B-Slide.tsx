"use client";
// 导入必要的依赖
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// 定义图片数组，存储轮播图片的路径
const images = [
	"/website/pic/desktop1.jpg",
	"/website/pic/desktop2.jpg",
	"/website/pic/game1.jpg",
	"/website/pic/astronaut.jpg",
	"/website/pic/midnight.jpg",
	"/website/pic/bridge.jpg",
	"/website/pic/man.jpg",
	"/website/pic/mount.jpg",
	"/website/pic/mouse.jpg",
	"/website/pic/pussy.jpg",
	"/website/pic/people.jpg",
	"/website/pic/house.png",
];

export default function Slide() {
	// 创建引用，用于操作DOM元素
	const sliderRef = useRef<HTMLDivElement>(null);
	const firstSlideRef = useRef<HTMLDivElement>(null);

	// 使用GSAP创建动画效果
	useGSAP(
		() => {
			const slider = sliderRef.current;
			const firstSlide = firstSlideRef.current;

			if (!slider || !firstSlide) return;

			// 获取单个幻灯片的宽度
			const slideWidth = firstSlide.offsetWidth;

			// 创建无限滚动动画
			gsap.to(slider, {
				x: -slideWidth, // 水平移动距离
				duration: 45, // 动画持续时间
				ease: "none", // 线性动画
				repeat: -1, // 无限重复
				modifiers: {
					// 确保滚动位置在slideWidth范围内循环
					x: gsap.utils.unitize((x) => parseFloat(x) % slideWidth),
				},
			});
		},
		{ scope: sliderRef },
	);

	return (
		<div className="flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-[2%] md:flex-row dark:bg-black">
			{/* 内容区域 */}
			<div className="h-full flex-2/5 p-[5%]">
				<h1>Dont know what to place here</h1>
			</div>
			{/* 轮播图区域 */}
			<div className="h-full flex-3/5 overflow-hidden rounded-3xl">
				{/* 轮播容器 */}
				<div ref={sliderRef} className="flex h-full">
					{/* 第一组图片 */}
					<div ref={firstSlideRef} className="flex h-full flex-none">
						{images.map((src, i) => (
							<div key={i} className="relative h-full w-auto flex-none">
								<Image
									src={src}
									alt=""
									width={0}
									height={0}
									className="h-full w-auto object-contain"
									sizes="100vw"
									priority={i === 0}
								/>
							</div>
						))}
					</div>
					{/* 第二组图片（用于无缝循环） */}
					<div className="flex h-full flex-none">
						{images.map((src, i) => (
							<div
								key={`clone-${i}`}
								className="relative h-full w-auto flex-none"
							>
								<Image
									src={src}
									alt=""
									width={0}
									height={0}
									className="h-full w-auto object-contain"
									sizes="100vw"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
