'use client';
import styles from "./InputContainer.module.css"

import ErrorShorten from "../ErrorShorten/ErrorShorten"
import FormShorten from "../FormShorten/FormShorten"
import UserShortenLinks from "../UserShortenLinks/UserShortenLinks"

import { useState, useEffect } from "react";

export default function InputContainer () {

    const [data, setData] = useState([])

    const handleSubmit = async (event) => {
        const form = document.querySelector("#form")
        const errorMessage = document.querySelector("#errorMessage")

        event.preventDefault()

        const data = event.target.url.value
        
        const response = fetch(`https://api.shrtco.de/v2/shorten?url=${data}`)
        .then(res => res.json())
        .then(data => setData(data))


        if(!data || data === "") {
            errorMessage.classList.remove("hidden")
            form.reset()
        } else {
            errorMessage.classList.add("hidden")
        }
    }


    return  <>
                <div className={styles.backgroundImage}>
                    <FormShorten handleSubmit={handleSubmit}/>
                    <ErrorShorten/>
                </div>
                <UserShortenLinks/>
            </>
}