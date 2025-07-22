import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function Body({ children }: Props) {
	return (
		<div
			className={`flex flex-1 flex-col border-b-1 border-gray-950/5 dark:border-white/10`}
		>
			{children}
		</div>
	);
}

export function WhiteSpace() {
	return (
		<div className="border-t-1 border-gray-950/5 dark:border-white/10">
			<div
				className={`htps-bg-line mx-[7.5%] h-full border-x-1 border-gray-950/5 dark:border-white/10`}
			>
				<div
					className={`mx-[2.3%] h-full border-x-1 border-gray-950/5 bg-white dark:border-white/10 dark:bg-black`}
				>
					<div className="pt-[2%]"></div>
				</div>
			</div>
		</div>
	);
}
