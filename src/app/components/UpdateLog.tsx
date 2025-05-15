"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Commit {
	sha: string;
	commit: {
		author: {
			name: string;
			email: string;
			date: string;
		};
		message: string;
		verification: {
			verified: boolean;
		};
	};
	author: {
		login: string;
		avatar_url: string;
	};
	parents: Array<{
		sha: string;
	}>;
	html_url: string;
	stats?: {
		total: number;
		additions: number;
		deletions: number;
	};
	ref?: string;
}

export default function Features() {
	const [commits, setCommits] = useState<Commit[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchCommits() {
			try {
				setLoading(true);
				const response = await fetch("/website/api/github");
				const data = await response.json();
				if (response.status !== 200) {
					throw new Error("Failed to fetch commits");
				} else {
					setCommits(data.slice(0, 10)); // 获取最近10条提交
				}
			} catch (error) {
				console.error("获取提交日志失败:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchCommits();
	}, []);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleString("zh-CN", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
		});
	};

	return (
		<div
			className={`flex flex-1 flex-col border-b-1 border-gray-950/5 dark:border-white/10`}
		>
			{/* Up Space */}
			<div className="h-26 border-b-1 border-gray-950/5 dark:border-white/10">
				<div
					className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<h1 className="pt-17 pb-3 pl-3 text-sm tracking-wide text-black/60 dark:text-white/60">
							更新日志 * 更新日誌 * Update Log * Обновить журнал *
							Aktualisierungsprotokoll
						</h1>
					</div>
				</div>
			</div>

			{/* middle Space 1 */}
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

			{/* UpdateLog */}
			<div className="flex flex-1">
				<div
					className={`htps-bg-line mx-[7.5%] flex-1 border-x-1 border-gray-950/5 dark:border-white/10`}
				>
					<div
						className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
					>
						<div className="h-full p-4">
							{loading ? (
								<div className="flex h-full items-center justify-center py-10">
									<div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-black dark:border-t-white"></div>
								</div>
							) : (
								commits.map((commit) => (
									<div key={commit.sha} className="mb-4">
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{formatDate(commit.commit.author.date)}
											{" · "}
											<Link
												href={`https://github.com/${commit.author?.login}`}
												target="_blank"
												rel="noopener noreferrer"
												className="font-medium hover:underline"
											>
												{commit.author?.login || commit.commit.author.name}
											</Link>
											{" · "}
											<Link
												href={commit.html_url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-500 hover:underline"
											>
												{commit.sha.substring(0, 7)}
											</Link>
											{commit.ref && (
												<span className="ml-2 text-blue-500">
													{" · "}
													{commit.ref}
												</span>
											)}
											{commit.stats && (
												<span className="ml-2">
													{" · "}
													<span className="text-green-500">
														+{commit.stats.additions}
													</span>{" "}
													<span className="text-red-500">
														-{commit.stats.deletions}
													</span>
												</span>
											)}
										</p>
										<p className="mt-1 text-sm">{commit.commit.message}</p>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
