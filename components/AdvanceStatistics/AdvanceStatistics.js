import InputContainer from "../InputContainer/InputContainer"
import Card from "../Card/Card"
import RecognitionImg from "../../images/icon-brand-recognition.svg"
import RecordsImg from "../../images/icon-detailed-records.svg"
import CustomizableImg from "../../images/icon-fully-customizable.svg"

export default function AdvanceStatistics () {
    return  <section className="relative mt-8 bg-bgGray flex flex-col items-center gap-4 justify-center">
                <InputContainer/>
                <h2 className="text-2xl font-bold text-center text-veryDarkViolet">Advance Statistics</h2>
                <p className="mb-5 text-md text-grayViolet text-center px-4">Track how your links are performing across the web with our advanced statistics dashboard</p>
                <div className="flex flex-col gap-10">
                    <Card image={RecognitionImg} title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don´t mean a thing. Branded links help instill confidence in your content."/>
                    <Card image={RecordsImg} title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
                    <Card image={CustomizableImg} title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."/>
                </div>
                <div className="absolute h-4/6 -bottom-0 w-2 bg-cyan z-10"></div>
                

            </section>
}