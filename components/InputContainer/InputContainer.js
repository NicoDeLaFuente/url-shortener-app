import styles from "./InputContainer.module.css"

import ErrorShorten from "../ErrorShorten/ErrorShorten"
import FormShorten from "../FormShorten/FormShorten"

export default function InputContainer () {

    return  <div className={styles.backgroundImage}>
                <FormShorten/>
                <ErrorShorten/>
            </div>
}