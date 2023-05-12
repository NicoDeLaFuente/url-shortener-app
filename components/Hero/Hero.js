import TitleHeroHome from "../TitleHeroHome/TitleHeroHome"
import WorkingImage from "../WorkingImage/WorkingImage"

export default function Hero () {
    return  <section className=" p-5 flex flex-col h-fit sm:my-0 sm:mx-auto sm:max-w-5xl sm:flex-row-reverse">
                <WorkingImage width={800} height={800}/>
                <TitleHeroHome/>
            </section>
}