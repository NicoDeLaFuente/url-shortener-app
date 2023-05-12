import Image from "next/image"
import LogoImg from "../../images/logo.svg"
const Logo = () => {
    return <Image
        src={LogoImg }
        width={100}
        height={100}
        alt="Logo"
    >
    </Image>
}

export default Logo;