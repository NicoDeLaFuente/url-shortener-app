'use client';
import styles from "./InputContainer.module.css"

import ErrorShorten from "../ErrorShorten/ErrorShorten"
import FormShorten from "../FormShorten/FormShorten"
import UserShortenLinks from "../UserShortenLinks/UserShortenLinks"

import { useState, useEffect } from "react";
import { data } from "autoprefixer";

export default function InputContainer () {

    const [link, setLink] = useState([])

    const handleSubmit = async (event) => {
        const form = document.querySelector("#form")
        const errorMessage = document.querySelector("#errorMessage")

        event.preventDefault()

        const data = event.target.url.value
        
        if (data && data.length > 6) {
            try {
                const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${data}`);
                const newData = await response.json();
                setLink([...link, newData.result]);
                errorMessage.classList.add("hidden")
            } catch (error) {
                console.error('Error al llamar a la API:', error);    
            }
        } else {
            errorMessage.classList.remove("hidden")
        }

        event.target.reset()
    }

    // Setting Local Storage. 
    localStorage.setItem("links", JSON.stringify(link))

    //Getting Local Storage
    const linksInStorage = JSON.parse(localStorage.getItem("links"))
    console.log(linksInStorage)

    return  <>
                <div className={styles.backgroundImage}>
                    <FormShorten handleSubmit={handleSubmit}/>
                    <ErrorShorten/>
                </div>
                {link && link.length > 0 && link.map((link, index) => (
                    <UserShortenLinks key={index} data={link} />
                ))}
            </>
}