"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import HeartIcon from "./HeartIcon";

/**
 * 鼠标轨迹特效配置
 * CLEANUP_INTERVAL: 清理点的时间间隔(ms)
 * POINT_LIFETIME: 每个点的生命周期(ms)
 * OFFSET_RANGE: 随机偏移范围(px)
 * ICON_SIZE: 图标大小(px)
 */
const TRAIL_CONFIG = {
	CLEANUP_INTERVAL: 50,
	POINT_LIFETIME: 500,
	OFFSET_RANGE: 20,
	ICON_SIZE: 7,
} as const;

// 点的接口定义
interface Point {
	x: number; // 水平位置
	y: number; // 垂直位置
	timeStamp: number; // 创建时间戳
	offsetX: number; // 水平随机偏移
	offsetY: number; // 垂直随机偏移
	id: string; // 添加唯一标识符
}

// 鼠标位置接口
interface MousePosition {
	x: number;
	y: number;
	scrollY: number;
}

/**
 * MouseTrail组件：创建鼠标移动轨迹特效
 * 功能：跟随鼠标移动生成心形图标，并在一定时间后淡出消失
 */
const MouseTrail = () => {
	// 存储所有轨迹点
	const [points, setPoints] = useState<Point[]>([]);
	// 记录最后的鼠标位置
	const lastMousePosRef = useRef<MousePosition>({ x: 0, y: 0, scrollY: 0 });
	// 用于管理滚动事件的定时器
	const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

	/**
	 * 生成随机偏移值
	 * @param range 偏移范围
	 * @returns 随机偏移值
	 */
	const getRandomOffset = useCallback(
		(range: number): number => (Math.random() - 0.5) * range * 2,
		[],
	);

	/**
	 * 生成唯一标识符
	 * @returns 时间戳和随机字符串组合的唯一ID
	 */
	const generateUniqueId = useCallback(
		() => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
		[],
	);

	/**
	 * 创建新的轨迹点
	 * @param x 水平坐标
	 * @param y 垂直坐标
	 * @param scrollY 页面滚动位置
	 */
	const createPoint = useCallback(
		(x: number, y: number, scrollY: number): Point => ({
			x,
			y: y + scrollY,
			timeStamp: Date.now(),
			offsetX: getRandomOffset(TRAIL_CONFIG.OFFSET_RANGE),
			offsetY: getRandomOffset(TRAIL_CONFIG.OFFSET_RANGE),
			id: generateUniqueId(),
		}),
		[getRandomOffset, generateUniqueId],
	);

	useEffect(() => {
		/**
		 * 处理鼠标移动事件
		 * 记录鼠标位置并创建新的轨迹点
		 */
		const handleMouseMove = (e: MouseEvent) => {
			const { clientX: x, clientY: y } = e;
			const currentScrollY = window.scrollY;
			lastMousePosRef.current = { x, y, scrollY: currentScrollY };
			setPoints((prev) => [...prev, createPoint(x, y, currentScrollY)]);
		};

		/**
		 * 处理页面滚动事件
		 * 在滚动时创建新的轨迹点保持视觉连续性
		 */
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const { x, y } = lastMousePosRef.current;

			if (x !== 0 || y !== 0) {
				setPoints((prev) => [...prev, createPoint(x, y, currentScrollY)]);
			}
			lastMousePosRef.current.scrollY = currentScrollY;

			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current);
			}
			timeoutIdRef.current = setTimeout(() => {
				timeoutIdRef.current = null;
			}, TRAIL_CONFIG.POINT_LIFETIME);
		};

		/**
		 * 清理过期的轨迹点
		 * 移除超过生命周期的点
		 */
		const cleanup = () => {
			const now = Date.now();
			setPoints((prev) =>
				prev.filter((point) => {
					const age = now - point.timeStamp;
					return age < TRAIL_CONFIG.POINT_LIFETIME && age >= 0;
				}),
			);
		};

		// 添加事件监听
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("scroll", handleScroll);
		const interval = setInterval(cleanup, TRAIL_CONFIG.CLEANUP_INTERVAL);

		// 清理事件监听和定时器
		return () => {
			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current);
			}
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("scroll", handleScroll);
			clearInterval(interval);
		};
	}, [createPoint]);

	/**
	 * 渲染轨迹点
	 * 每个点都是一个带有淡出效果的心形图标
	 */
	return (
		<div style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}>
			{points.map((point) => (
				<div
					key={point.id}
					style={{
						position: "fixed",
						left: `${point.x + point.offsetX - TRAIL_CONFIG.ICON_SIZE}px`,
						top: `${point.y - window.scrollY + point.offsetY - TRAIL_CONFIG.ICON_SIZE}px`,
						opacity:
							1 - (Date.now() - point.timeStamp) / TRAIL_CONFIG.POINT_LIFETIME,
						transform: "translate(-50%, -50%)",
					}}
				>
					<HeartIcon />
				</div>
			))}
		</div>
	);
};

export default MouseTrail;
