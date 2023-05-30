'use client';
import styles from "./InputContainer.module.css"

import ErrorShorten from "../ErrorShorten/ErrorShorten"
import FormShorten from "../FormShorten/FormShorten"
import UserShortenLinks from "../UserShortenLinks/UserShortenLinks"

import { useState, useEffect } from "react";


export default function InputContainer () {

    const [link, setLink] = useState([])
    let linksArr = []
    let linksInStorage = []

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
                linksArr.push(newData.result);

                // storage the links in LocalStorage
                localStorage.setItem('links', JSON.stringify(linksArr));

                errorMessage.classList.add("hidden")
            } catch (error) {
                console.error('Error al llamar a la API:', error);    
            }
        } else {
            errorMessage.classList.remove("hidden")
        }

        event.target.reset()
    }

    useEffect(() => {
        const storedLinks = localStorage.getItem('links');
        if (storedLinks) {
          linksInStorage = JSON.parse(storedLinks);
          setLink([...link, ...linksInStorage]);
        }
      }, []);

    // Setting Local Storage. 
    

    //Getting Local Storage
   

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