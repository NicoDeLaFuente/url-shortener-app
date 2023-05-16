import styles from "./InputContainer.module.css"

import ShortenInput from "../ShortenInput/ShortenInput"
import ButtonShorten from "../ButtonShorten/ButtonShorten"

export default function InputContainer () {

    return  <section className={styles.backgroundImageMobile}>
                <ShortenInput/>
                <ButtonShorten name="Shorten it!"/>
            </section>
}