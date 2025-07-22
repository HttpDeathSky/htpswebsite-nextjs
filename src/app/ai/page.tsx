import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Chat from "@/app/ai/chat/chat";

export default function updateLog() {
	return (
		<main className="flex min-h-screen flex-col dark:bg-black">
			<Hero />
			<Chat />
			<Footer />
		</main>
	);
}
