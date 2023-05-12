import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default function Header () {
    return  <header className="p-5 flex justify-between items-center relative sm:static sm:justify-start sm:gap-2 sm:py-3 sm:my-0 sm:mx-auto sm:max-w-5xl">
                <Logo/>
                <Nav/>
            </header>
}