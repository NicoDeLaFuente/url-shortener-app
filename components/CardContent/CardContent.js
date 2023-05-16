export default function CardContent({title, text}) {
    return  <div className="flex flex-col gap-4 items-center">
                <h3 className="text-xl text-bold text-veryDarkViolet">{title}</h3>
                <p className="text-center text-sm text-grayViolet px-10">{text}</p>
            </div>
}