import styles from "./InputContainer.module.css"

import ShortenInput from "../ShortenInput/ShortenInput"
import ButtonShorten from "../ButtonShorten/ButtonShorten"
import ErrorShorten from "../ErrorShorten/ErrorShorten"
import ShortenLink from "../ShortenLink/ShortenLink"

export default function InputContainer () {

    return  <div className="flex flex-col w-5/6">
                <div className={styles.backgroundImage}>
                    <div className="flex gap-2 sm:gap-5">
                        <ShortenInput/>
                        <ButtonShorten name="Shorten it!"/>
                    </div>
                    <ErrorShorten/>
                </div>
                <ShortenLink/>

            </div>
}