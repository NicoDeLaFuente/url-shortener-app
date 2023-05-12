import Link from "next/link"
const NavList = () => {
    return  <nav id="nav" className=" z-10	 p-5 py-8 bg-darkViolet rounded-md text-white hidden absolute top-20 right-8 w-10/12 flex flex-col items-center gap-6 sm:bg-transparent sm:text-grayViolet sm:static sm:flex sm:flex-row sm:justify-between sm:grow">
                <div className="flex flex-col items-center gap-6 sm:flex sm:flex-row sm:gap-3">
                    <Link href="/features" className="cursor-pointer sm:px-2">Features</Link>
                    <Link href="/pricing" className="cursor-pointer sm:px-2">Pricing</Link>
                    <Link href="/resources" className="cursor-pointer sm:px-2">Resources</Link>
                </div>
                <div className="w-10/12 h-px bg-gray grid items-center sm:hidden"></div>
                <div className=" w-full flex flex-col items-center gap-6 sm:flex sm:flex-row sm:gap-3 sm:justify-end ">
                    <Link href="/login" className="cursor-pointer sm:px-2">Login</Link>
                    <Link href="/signUp" className="bg-cyan w-full text-center py-1 rounded-2xl cursor-pointer sm:w-auto sm:px-4 sm:text-white">Sign Up</Link>
                </div>
            </nav>
}

export default NavList;