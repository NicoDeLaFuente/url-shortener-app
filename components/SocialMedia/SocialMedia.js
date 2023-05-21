
import SocialIcon from "../SocialIcon/SocialIcon"

import Facebook from "../../images/icon-facebook.svg"
import Instagram from "../../images/icon-instagram.svg"
import Pinterest from "../../images/icon-pinterest.svg"
import Twitter from "../../images/icon-twitter.svg"

export default function SocialMedia () {
    return <div className="flex items-center justify-center gap-4 mb-8 pt-4 sm:pt-1">
        
            <SocialIcon image={Facebook} href="#"/>
            <SocialIcon image={Twitter} href="#"/>
            <SocialIcon image={Pinterest} href="#"/>
            <SocialIcon image={Instagram} href="#"/>

    </div>
}