import ButtonCopy from "../ButtonCopy/ButtonCopy"
import LinkEnteredByUser from "../LinkEnteredByUser/LinkEnteredByUser"
import LinkShorteredByApi from "../LinkShorteredByApi/LinkShorteredByApi"

import {CopyToClipboard} from 'react-copy-to-clipboard';
import ButtonCopied from '../ButtonCopied/ButtonCopied';

import { useState } from "react"
export default function UserShortenLinks ({data}){
    const {full_short_link: shortLink, original_link: originalLink} = data
    
    const [copied, setCopied] = useState(false)
    const [copiedButton, setCopiedbutton] = useState(false)

    const onCopy = () => {
        setCopied(true)
    }


    return  <div id="userSearch" className="p-4 flex flex-col bg-white w-4/5 rounded-md items-center justify-center gap-2 sm:max-w-5xl sm:flex-row sm:justify-between sm:px-6">
                <LinkEnteredByUser link={originalLink}/>
                <div className="border-t border-gray p-1 w-full flex flex-col  gap-2 sm:flex-row sm:border-none sm:justify-end sm:gap-4 sm:items-center">
                    <LinkShorteredByApi shortLink={shortLink}/>
                    <CopyToClipboard text={shortLink}>
                        <ButtonCopy name="Copy" />
                    </CopyToClipboard>
                </div>
            </div>
}