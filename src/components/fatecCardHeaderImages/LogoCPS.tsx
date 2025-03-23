import React from 'react'
import Image from 'next/image'

function LogoCPS() {
    return (
        <Image
            className="w-[66px] h-[44px]"
            src="/cps-logo.png"
            width={66}
            height={44}
            alt="Logo CPS"
        />
    )
}

export default LogoCPS