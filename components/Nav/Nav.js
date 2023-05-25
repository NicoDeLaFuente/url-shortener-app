'use client'

import { useState } from "react"
import BurgerIcon from "../BurgerIcon/BurgerIcon"
import NavList from "../NavList/NavList"
export default function Nav () {

    const [isOpen, setIsOpen] = useState(true)

    const burgerHandler = () => {
        setIsOpen(!isOpen)

        const nav = document.querySelector("#nav")
        if (isOpen) {
            nav.classList.remove("hidden")
        } else {
            nav.classList.add("hidden")
        }
        
        
    }


    return  <>
                <BurgerIcon burgerHandler={burgerHandler}/>
                <NavList/>
            </>
}