import React from 'react'
import {
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import LogoFatec from './fatecCardHeaderImages/LogoFatec'
import LogoCPS from './fatecCardHeaderImages/LogoCPS'
import LogoSP from './fatecCardHeaderImages/LogoSP'

interface Props {
    description?: string
}

function CardFatecHeader({ description = 'Titulo Padrão do Componente' }: Props) {
    return (
        <CardHeader className='min-w-[450px]'>
            <CardTitle className="flex items-center gap-8 overflow-hidden">
                <LogoFatec />
                <div className="flex items-center gap-4 justify-end w-full">
                    <LogoCPS />
                    <LogoSP />
                </div>
            </CardTitle>
            <CardDescription className="mt-2 font-bold text-2xl text-black text-center">{description}</CardDescription>
        </CardHeader>
    )
}

export default CardFatecHeader