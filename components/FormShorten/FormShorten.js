import ShortenInput from "../ShortenInput/ShortenInput"
import ButtonShorten from "../ButtonShorten/ButtonShorten"



export default function FormShorten (){
    return  <form className="flex flex-col gap-2 sm:gap-5 sm:flex-row">
            <ShortenInput/>
            <ButtonShorten name="Shorten it!"/>
            </form>
}