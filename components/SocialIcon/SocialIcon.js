import Image from "next/image"

export default function SocialIcon({image}) {
    return  <Image
            src={image}
            width={30}
            height={30}
            alt="social Icon"
            />
}