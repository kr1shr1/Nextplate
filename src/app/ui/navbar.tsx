import Link from "next/link"



export default function Navbar(){
    return (
        <div className="w-[15%] h-full absolute bg-white p-5 text-black font-bold flex flex-col items-center gap-5 md:flex-row md:w-full md:h-15 md:relative md:justify-center">
            <Link href={'/'}>Home</Link>
            <Link href={'/premium'}>Premium</Link>
            <Link href={'/profile'}>Profile</Link>
            <Link href={'/auth/login'}>Login</Link>
        </div>
    )
}