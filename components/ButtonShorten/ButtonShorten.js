'use client'

export default function ButtonShorten ({name}) {
    return  <button className="text-xs p-2 cursor-pointer bg-cyan text-white rounded-md hover:opacity-50 sm:px-4 sm:text-base">
                {name}
            </button>
}