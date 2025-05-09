"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const images = [
	"/website/features_hbnt/astronaut.jpg",
	"/website/features_hbnt/bridge.jpg",
	"/website/features_hbnt/man.jpg",
	"/website/features_hbnt/mouse.jpg",
	"/website/features_hbnt/pussy.jpg",
	"/website/features_hbnt/house.png",
];

export default function FadeSlider() {
	return (
		<div className="flex-rol flex h-full w-full justify-between p-[1%]">
			<div className="h-full w-1/2">12sadfsadfasdf3</div>
			<div className="h-full w-1/2">
				<Swiper
					effect="fade"
					fadeEffect={{ crossFade: true }}
					autoplay={{ delay: 1000 }}
					loop={true}
					speed={1333}
					modules={[Autoplay, EffectFade]}
					className="h-full w-full"
				>
					{images.map((src, i) => (
						<SwiperSlide key={i} className="h-full w-full">
							<div className="h-full w-full">
								<Image src={src} alt="" fill className="object-contain" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
