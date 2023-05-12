'use client'
export default function Button ({name = "default"}) {
    return <button className="rounded-3xl cursor-pointer bg-cyan px-4 py-2 text-white sm:mt-3 md:mt-5">{name}</button>
}