import Link from 'next/link';

const Sidebar = ({ posts }) => {
    //console.log(posts);
    return (
        <div className="w-full overflow-auto p-5 bg-slate-900 border-r-2 border-slate-700">
            <div className="text-white ml-10">
                <div className='flex justify-center'>
                    <h1 className='text-center font-bold text-3xl mb-5 lg:mb-10 mt-5'>Qu1etboy's blog</h1>
                    
                </div>
                <ul className='hidden lg:flex gap-5 justify-center'>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                </ul>
           
            </div>
        </div>
    )
}

export default Sidebar;