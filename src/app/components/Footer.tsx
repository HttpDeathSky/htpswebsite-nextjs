'use client';
import Link from "next/link";

export default function Footer() {
    return (
        <div className="h-47">
            <div className={`h-36 border-b-1 dark:border-white/9 border-black/9`}>
                <div className={`mx-[11%] htps-bg-line border-black/9  dark:border-white/9 border-x-1 h-full`}>
                    <div className={`mx-[2%] bg-white border-black/9 dark:bg-black dark:border-white/9 border-x-1 h-full flex`}>
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold mb-1">Learn</p>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Documentation</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Showcase</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Blog</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Playground</Link>
                        </div>
                        <div className={`w-7 border-x-1 border-black/9 dark:border-white/9`} />
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold">Tailwind Plus</p>
                            <Link className="text-sm mb-1 hover:underline" href="/website">UI Blocks</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Templates</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">UI Kit</Link>
                        </div>
                        <div className={`w-7 border-x-1 border-black/9 dark:border-white/9`} />
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold">Resources</p>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Refactoring UI</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Headless UI</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Heroicons</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Hero Patterns</Link>
                        </div>
                        <div className={`w-7 border-x-1 border-black/9 dark:border-white/9`} />
                        <div className="pr-20 pl-2 pt-4 flex-1 flex flex-col">
                            <p className="text-ml font-bold">Community</p>
                            <Link className="text-sm mb-1 hover:underline" href="/website">GitHub</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">Discord</Link>
                            <Link className="text-sm mb-1 hover:underline" href="/website">X</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <div className={`mx-[11%] htps-bg-line border-black/9 dark:border-white/9 border-x-1 h-full`}>
                    <div className={`mx-[2%] bg-white border-black/9 dark:bg-black dark:border-white/9 border-x-1 h-full`}>
                        <div className="flex flex-col justify-end items-end h-full pr-10 pb-8">
                            Build With Nextjs && Tailwind
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}