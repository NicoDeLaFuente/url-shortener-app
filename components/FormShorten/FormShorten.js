
import ShortenInput from "../ShortenInput/ShortenInput"
import ButtonShorten from "../ButtonShorten/ButtonShorten"

import { useState } from "react";

export default function FormShorten ({handleSubmit}){

    return  <form onSubmit={handleSubmit} id="form" className="flex flex-col gap-2 sm:gap-5 sm:flex-row">
            <ShortenInput/>
            <ButtonShorten name="Shorten it!"/>
            </form>
}