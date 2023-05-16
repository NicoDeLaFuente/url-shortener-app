import SocialIcon from "../SocialIcon/SocialIcon"

import Facebook from "../../images/icon-facebook.svg"
import Instagram from "../../images/icon-instagram.svg"
import Pinterest from "../../images/icon-pinterest.svg"
import Twitter from "../../images/icon-twitter.svg"

export default function SocialMedia () {
    return <div >
        <SocialIcon image={Facebook}/>
        <SocialIcon image={Twitter}/>
        <SocialIcon image={Pinterest}/>
        <SocialIcon image={Instagram}/>

    </div>
}