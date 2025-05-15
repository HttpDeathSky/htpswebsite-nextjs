import Hero from "../components/Hero";
import UpdateLog from "../components/UpdateLog";
import Footer from "../components/Footer";

export default function updateLog() {
	return (
		<main className="flex min-h-screen flex-col dark:bg-black">
			<Hero />
			<UpdateLog />
			{/* <Test /> */}
			<Footer />
		</main>
	);
}
