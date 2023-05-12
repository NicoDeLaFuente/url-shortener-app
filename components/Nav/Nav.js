'use client'

import { useState } from "react"
import BurgerIcon from "../BurgerIcon/BurgerIcon"
import NavList from "../NavList/NavList"
export default function Nav () {

    const [burgerMenu, setBurgerMenu] = useState()

    const burgerHandler = () => {
        setBurgerMenu(!burgerMenu)
        const nav = document.querySelector("#nav")
        if (burgerMenu) {
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