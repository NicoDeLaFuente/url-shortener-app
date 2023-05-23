import ButtonCopy from "../ButtonCopy/ButtonCopy"
import LinkEnteredByUser from "../LinkEnteredByUser/LinkEnteredByUser"
import LinkShorteredByApi from "../LinkShorteredByApi/LinkShorteredByApi"
export default function UserShortenLinks (){

    return  <div className="p-4 flex flex-col bg-white w-4/5 rounded-md items-center justify-center gap-2 sm:max-w-5xl sm:flex-row sm:justify-between sm:px-6">
                <LinkEnteredByUser/>
                <div className="border-t border-gray p-1 w-full flex flex-col  gap-2 sm:flex-row sm:border-none sm:justify-end sm:gap-4 sm:items-center">
                    <LinkShorteredByApi/>
                    <ButtonCopy name="Copy"/> {/* hay que hacer una ternaria para ver el boton a desplegar */}
                </div>
            </div>
}