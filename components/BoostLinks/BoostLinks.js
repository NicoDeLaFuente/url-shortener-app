import styles from "./BoostLinks.module.css"

import Button from "../Button/Button"
export default function BoostLinks () {
    return  <section className={styles.backgroundImage}>
                <h2 className="text-2xl font-bold text-center text-white sm:text-3xl">Boost your links today</h2>
                <Button name="Get started"/>
            </section>
}