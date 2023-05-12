import WorkingImg from "../../images/illustration-working.svg"
import Image from "next/image"

export default function WorkingImage ({width, height}){
    return <div className="">
                <Image
                className=""
                src={WorkingImg}
                width={width}
                height={height}
                alt="Working ilustration"
                >
                </Image>
            </div>
}