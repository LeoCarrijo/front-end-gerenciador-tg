import React from 'react'
import Image from 'next/image'

function LogoSP() {
    return (
        <Image
            className="w-[150px] h-[30px]"
            src="/sp-logo.png"
            width={150}
            height={30}
            alt="Logo SP"
        />
    )
}

export default LogoSP