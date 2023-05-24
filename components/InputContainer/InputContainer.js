'use client';
import styles from "./InputContainer.module.css"

import ErrorShorten from "../ErrorShorten/ErrorShorten"
import FormShorten from "../FormShorten/FormShorten"
import UserShortenLinks from "../UserShortenLinks/UserShortenLinks"

import { useState, useEffect } from "react";
import { data } from "autoprefixer";

export default function InputContainer () {

    const [link, setLink] = useState()
    let dataArray = []

    const handleSubmit = async (event) => {
        const form = document.querySelector("#form")
        const errorMessage = document.querySelector("#errorMessage")

        event.preventDefault()

        const data = event.target.url.value
        
        if (data && data.length > 6) {
        const response = fetch(`https://api.shrtco.de/v2/shorten?url=${data}`)
        .then(res => res.json())
        .then(newData => setLink(newData.result))
        }

        if(!data || data.length <= 6) {
            errorMessage.classList.remove("hidden")
            form.reset()
        } else {
            errorMessage.classList.add("hidden")
            form.reset()
        }
    }

    return  <>
                <div className={styles.backgroundImage}>
                    <FormShorten handleSubmit={handleSubmit}/>
                    <ErrorShorten/>
                </div>
                {
                !link || link === undefined ? <></> : <UserShortenLinks key={link.data} data={link}/>
                }
            </>
}