import { useState } from "react";
export default function Auth({ onClose }: { onClose: () => void }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("用户名:", username);
		console.log("密码:", password);
		// TODO: 发起登录请求
	};
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/20 dark:bg-amber-50/20 transition-opacity duration-300 ease-in-out"
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose();
				}
			}}
		>
			<div className="w-[400px] rounded border-1 border-gray-950/5 bg-white p-6 shadow transition-transform duration-300 ease-in-out dark:border-white/10 dark:bg-black">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-xl font-semibold">Login</h2>
					<button
						onClick={onClose}
						className="rounded-full p-2 transition-colors hover:bg-gray-100"
						aria-label="关闭"
					>
						<svg
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				{/* 登录表单等内容 */}
				<div className="rounded border-1 border-gray-950/5 p-[5%] dark:border-white/10">
					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							placeholder="用户名"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full rounded border px-4 py-2"
						/>
						<input
							type="password"
							placeholder="密码"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full rounded border px-4 py-2"
						/>
						<button
							type="submit"
							className="w-full rounded bg-blue-500 px-4 py-2 pl-4 text-white"
						>
							登录
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
