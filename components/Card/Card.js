
import CardContent from "../CardContent/CardContent"
import CardImage from "../CardImage/CardImage"

import RecognitionImg from "../../images/icon-brand-recognition.svg"
import RecordsImg from "../../images/icon-detailed-records.svg"
import CustomizableImg from "../../images/icon-fully-customizable.svg"

export default function Card () {
    return  <div className="relative flex flex-col md:grid md:grid-cols-3 md:gridTemplateRows-layout">
                <div className='max-w-xs my-5 pb-10 mx-4 flex flex-col justify-center items-center gap-3 bg-white rounded-md z-20 sm:row-span-3 sm:row-start-1 sm:items-start sm:px-4'>
                    <CardImage image={RecognitionImg} />
                    <CardContent title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don´t mean a thing. Branded links help instill confidence in your content."/>
                </div>
                <div className='max-w-xs my-5 pb-10 mx-4 flex flex-col justify-center items-center gap-3 bg-white rounded-md z-20 sm:row-span-3 sm:row-start-2 sm:items-start sm:px-4'>
                    <CardImage image={RecordsImg} />
                    <CardContent title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
                </div>
                <div className='max-w-xs my-5 mb-0 pb-10 mx-4 flex flex-col justify-center items-center gap-3 bg-white rounded-md z-20 sm:row-span-3 sm:row-start-3 sm:items-start sm:px-4'>
                    <CardImage image={CustomizableImg} />
                    <CardContent title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."/>
                </div>
                <div className="absolute h-5/6 -bottom-0 inset-x-1/2 w-2 bg-cyan z-10 md:h-2 md:w-5/6 md:inset-y-1/2 md:left-12"></div>
            </div>
}