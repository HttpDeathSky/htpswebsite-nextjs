// 'use client';
// import dynamic from 'next/dynamic';
// const Features = dynamic(() => import('./components/Features'), { ssr: false });
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="flex flex-col dark:bg-black">
			<Hero />
			<Features />
			<Footer />
		</main>
	);
}
