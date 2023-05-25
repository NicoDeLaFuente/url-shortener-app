'use client'

import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function ButtonCopy ({name, shortLink, copyButtonHandler}) {

    const [copied, setCopied] = useState(false)

    const onCopy = () => {
        setCopied(true)
    }

    return  <CopyToClipboard
            text={shortLink}
            onCopy={onCopy}>
                <button onClick={copyButtonHandler} className="text-xs px-6 py-2 text-white bg-cyan rounded-md hover:opacity-50">{name}</button>
            </CopyToClipboard>
            
}