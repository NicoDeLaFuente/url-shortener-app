import Button from "../Button/Button"

export default function TitleHeroHome () {
    return  <div className="p-7 flex flex-col justify-center items-center gap-3 sm:items-start">
                <h1 className="text-4xl font-bold text-center text-veryDarkViolet sm:text-start md:text-5xl xl:text-6xl">More than just shorter links</h1>
                <p className="text-center text-gray text-lg sm:text-start">Build your brand´s recognition and get detailed insights on how your links are performing</p>
                <Button name="Get Started"/>
            </div>
}