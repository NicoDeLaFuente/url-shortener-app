import Image from "next/image"
export default function CardImage ({image}) {
    return  <div className="bg-darkViolet p-4 rounded-full -mt-7">
                <Image 
                src={image}
                height={35}
                width={35}
                alt="icon"/>
            </div>
}