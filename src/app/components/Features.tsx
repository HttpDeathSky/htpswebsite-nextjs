'use client';
import { useTheme } from 'next-themes';
export default function Features() {
    const { theme, setTheme } = useTheme();
    return (
        <div className={`h-330 border-b-1 ${theme === 'dark' ? 'border-white/27' : 'border-black/27'}`}>
            <div className={`mx-[11%] ${theme === 'dark' ? 'htps-bg-line-black border-white/27' : 'htps-bg-line-white border-black/27'} h-full border-x-1 border-black/27`}>
                <div className={`mx-[2%] ${theme === 'dark' ? 'bg-black border-white/27' : 'bg-white border-black/27'} h-full border-x-1`}>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}  tracking-tighter text-balance`}>
                        {theme}
                    </p>
                    <p className='bg-black dark:bg-white'>适当拉开房间里上空的飞机</p>
                </div>
            </div>
            <div className="bg-brand text-black">烧录卡解放立刻大数据法律上卡迪夫</div>
        </div>
    )
}