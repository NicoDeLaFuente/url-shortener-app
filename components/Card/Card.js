
import CardContent from "../CardContent/CardContent"
import CardImage from "../CardImage/CardImage"

export default function Card ({image, title, text}) {
    return  <div className="my-5 pb-10 mx-4 flex flex-col justify-center items-center gap-3 bg-white rounded-md z-20">
                <CardImage image={image} />
                <CardContent title={title} text={text}/>
            </div>
}