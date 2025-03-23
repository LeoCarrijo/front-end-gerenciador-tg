import React from 'react'
import Image from 'next/image'

function LogoFatec() {
    return (
        <Image
            className="w-[150px] h-[80px]"
            src="/fatec-logo.png"
            width={150}
            height={80}
            alt="Logo Fatec"
        />
    )
}

export default LogoFatec