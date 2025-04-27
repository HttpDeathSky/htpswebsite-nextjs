'use client';
import Image from "next/image"
import Link from 'next/link'
import { useTheme } from 'next-themes';

export default function Hero() {
    const { theme, setTheme } = useTheme();
    // 根据主题动态选择猫猫图片
    const catIcon = theme === 'dark' ? '/cat-kitty-white.svg' : '/cat-kitty-black.svg';
    const skyIcon = theme === 'dark' ? '/sky-svgrepo-white.svg' : '/sky-svgrepo-black.svg';
    return (
        <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} h-14 sticky top-0 z-50`}>
            <div className={`border-b-1 ${theme === 'dark' ? 'border-white/27' : 'border-black/27'} h-full w-full flex justify-between px-8 text-sm text-shadow-sm`}>
                <p className="flex items-center text-xl font-italic font-bold">
                    <Image onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}
                        className="mr-2 cursor-pointer"
                        src={skyIcon}
                        alt="Sky"
                        width={48}
                        height={48} />
                    Design By HtpSpace
                </p>
                <p className="flex items-center">
                    <Link className="mx-4" href="/">Docs</Link>
                    <Link className="mx-4" href="/">Blog</Link>
                    <Link className="ml-4" href="/">ShowCase</Link>
                    <Image
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="ml-6 cursor-pointer"
                        src={catIcon}
                        alt="Cat"
                        width={32}
                        height={32}
                    />
                </p>
            </div>
        </div>
    )
}