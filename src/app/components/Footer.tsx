'use client';
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Footer() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="h-47">
            <div className={`h-36 border-b-1 ${theme === 'dark' ? 'border-white/27' : 'border-black/27'}`}>
                <div className={`mx-[11%] ${theme === 'dark' ? 'htps-bg-line-black border-white/27' : 'htps-bg-line-white border-black/27'} border-x-1 h-full`}>
                    <div className={`mx-[2%] ${theme === 'dark' ? 'bg-black border-white/27' : 'bg-white border-black/27'} border-x-1 h-full flex`}>
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold mb-1">Learn</p>
                            <Link className="text-sm mb-1" href="/">Documentation</Link>
                            <Link className="text-sm mb-1" href="/">Showcase</Link>
                            <Link className="text-sm mb-1" href="/">Blog</Link>
                            <Link className="text-sm mb-1" href="/">Playground</Link>
                        </div>
                        <div className={`w-7 border-x-1 ${theme === 'dark' ? 'border-white/27' : 'border-black/27'}`} />
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold">Tailwind Plus</p>
                            <Link className="text-sm mb-1" href="/">UI Blocks</Link>
                            <Link className="text-sm mb-1" href="/">Templates</Link>
                            <Link className="text-sm mb-1" href="/">UI Kit</Link>
                        </div>
                        <div className={`w-7 border-x-1 ${theme === 'dark' ? 'border-white/27' : 'border-black/27'}`} />
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold">Resources</p>
                            <Link className="text-sm mb-1" href="/">Refactoring UI</Link>
                            <Link className="text-sm mb-1" href="/">Headless UI</Link>
                            <Link className="text-sm mb-1" href="/">Heroicons</Link>
                            <Link className="text-sm mb-1" href="/">Hero Patterns</Link>
                        </div>
                        <div className={`w-7 border-x-1 ${theme === 'dark' ? 'border-white/27' : 'border-black/27'}`} />
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold">Community</p>
                            <Link className="text-sm mb-1" href="/">GitHub</Link>
                            <Link className="text-sm mb-1" href="/">Discord</Link>
                            <Link className="text-sm mb-1" href="/">X</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <div className={`mx-[11%] ${theme === 'dark' ? 'htps-bg-line-black border-white/27' : 'htps-bg-line-white border-black/27'} border-x-1 h-full`}>
                    <div className={`mx-[2%] ${theme === 'dark' ? 'bg-black border-white/27' : 'bg-white border-black/27'} border-x-1 h-full flex`} />
                </div>
            </div>
        </div >
    )
}