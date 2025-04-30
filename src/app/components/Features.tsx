'use client'
import { useState, useEffect } from 'react'; // 确保有这行

export default function Features() {
    const codeText = `1 <div className={\`border-b-1 border-black/9 dark:border-white/9 h-full w-full flex
2\tjustify-between px-8 text-sm text-shadow-sm\`}>
3 \t<p className="flex items-center text-xl font-italic font-bold">
4 \t\t<Image onClick={() => {
5 \t\t\twindow.scrollTo({
6 \t\t\t\ttop: 0,
7 \t\t\t\tbehavior: 'smooth',
8 \t\t\t});
9 \t\t}}
10 \t\t\tclassName="mr-2 cursor-pointer"
11 \t\t\tsrc={skyIcon}
12 \t\t\talt="Sky"
13 \t\t\twidth={48}
14 \t\t\theight={48} />
15 \t\tDesign By HtpSpace
16 \t</p>
17 \t<p className="flex items-center">
18 \t\t<Link className="mx-4 hover:underline" href="/">Docs</Link>
19 \t\t<Link className="mx-4 hover:underline" href="/">Blog</Link>
20 \t\t<Link className="ml-4 hover:underline" href="/">ShowCase</Link>
21 \t\t<Image
22 \t\t\t........`;
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const typingInterval = setInterval(() => {
            setDisplayedText((prev) => prev + codeText.charAt(index));
            setIndex((prev) => prev + 1);
        }, 50);

        if (index >= codeText.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
            }, 10000);
        }

        return () => clearInterval(typingInterval);
    }, [index]);

    return (
        <div className={`h-330 border-b-1 border-black/9 dark:border-white/9 flex flex-col`}>
            {/* Up Space */}
            <div className='h-[16%] border-b-1 border-black/9 dark:border-white/9'>
                <div className={`mx-[11%] h-full htps-bg-line border-x-1 border-black/9 dark:border-white/9`}>
                    <div className={`mx-[2%] h-full bg-white dark:bg-black border-x-1 border-black/9 dark:border-white/9`}>
                        <h1 className='pt-13 text-sm text-gray-500 dark:text-gray-300 tracking-wide'>
                            text-8xl  text-gray-950  tracking-tighter  text-balance
                        </h1>
                    </div>
                </div>
            </div>
            {/* Title */}
            <div className={`mx-[11%] htps-bg-line border-x-1 border-black/9 dark:border-white/9`}>
                <div className={`mx-[2%] h-full bg-white dark:bg-black border-x-1 border-black/9 dark:border-white/9 flex flex-col`}>
                    <h1 className='my-[3%] ml-[4%] text-7xl tracking-tighter text-balance overflow-hidden'>
                        Rapidly build modern websites without ever leaving your HTML.
                    </h1>
                </div>
            </div>
            {/* Section 1 */}
            <div className='border-y-1 border-black/9 dark:border-white/9'>
                <div className={`mx-[11%] dark:border-white/9 htps-bg-line border-x-1 border-black/9 dark:border-white/9`}>
                    <div className={`mx-[2%] h-full bg-white dark:bg-black border-x-1 border-black/9 dark:border-white/9 py-[1%]`}>
                        <div className="w-full h-full flex flex-row justify-between">
                            {/* Code Simulate */}
                            <div className="ml-[4%] w-[67%] h-[493px] rounded-lg overflow-hidden shadow-lg">
                                {/* Simulate Mac Window */}
                                <div className="flex items-center justify-start bg-gray-200 dark:bg-gray-900 px-4 py-2">
                                    <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
                                    <span className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>
                                    <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                                </div>
                                {/* Code Body */}
                                <div className="px-4 pt-4 h-full overflow-auto text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
                                    <pre className=''>
                                        <code className=''>
                                            {/* `}<span className=''>{``}</span>{` */}
                                            {/* text-pink-500 dark:text-pink-300 */}
                                            {/* text-blue-500 dark:text-blue-300 */}
                                            {/* {`<`}<span className='text-pink-500 dark:text-pink-300'>{`div`}</span>{` `}<span className='text-blue-500 dark:text-blue-300'>{`className`}</span>{`={\`border-b-1 border-black/9 dark:border-white/9 h-full w-full`} */}
                                            {/* {` flex\n\t\tjustify-between px-8 text-sm text-shadow-sm\`}`} */}
                                            {/* {`\n\t<`}<span className='text-pink-500 dark:text-pink-300'>{`p`}</span>{` `}<span className='text-blue-500 dark:text-blue-300'>{`className`}</span>{`="flex items-center text-xl font-italic font-bold">`} */}
                                            {/* {`\n\t\t<`}<span className='text-pink-500 dark:text-pink-300'>{`Image`}</span>{` `}<span className='text-blue-500 dark:text-blue-300'>{`onClick`}</span>{`={() => {`} */}
                                            {displayedText}
                                            <span className="animate-pulse">|</span>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                            {/* Description Space */}
                            <div className='mx-[4%] p-[2%] w-[40%]'>
                                <p className='text-6xl overflow-hidden'>
                                    Dont know what to write<br />
                                    Set three lines of code<br />
                                    And then it will be displayed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 */}
            <div className={`mx-[11%] h-full htps-bg-line border-x-1 border-black/9 dark:border-white/9`}>
                <div className={`mx-[2%] h-full bg-white dark:bg-black border-x-1 border-black/9 dark:border-white/9 flex flex-col`}>

                </div>
            </div>
        </div >
    )
}