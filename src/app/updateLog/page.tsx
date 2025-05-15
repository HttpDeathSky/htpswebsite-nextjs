import Hero from "../components/Hero";
import UpdateLog from "../components/UpdateLog";
import Footer from "../components/Footer";

export default function updateLog() {
	return (
		<main className="flex min-h-screen flex-col">
			<Hero />
			<UpdateLog />
			{/* <Test /> */}
			<Footer />
		</main>
	);
}
