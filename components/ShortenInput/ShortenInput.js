'use client'

import { useEffect } from "react"

export default function ShortenInput () {

    useEffect(() => {
        fetch("https://api.shrtco.de/v2/shorten?url={userUrl}")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


    return  <input
                id="url"
                type="url" 
                placeholder="Shorten a link here..." 
                className="p-2 rounded-md sm:flex-grow">

            </input>
        
}