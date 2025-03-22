'use client'

import React from 'react';
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Props {
    children: React.ReactNode
    description?: string
    buttonText?: string
    buttonFunction?: () => void
}

function CardFatec(
    {
        children,
        description = 'Titulo Padrão da página de Layout',
        buttonText = 'Sem Título',
        buttonFunction = () => {alert('Sem Função')}
    }: Props) {
    return (
        <Card className="w-[500px] shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-8 overflow-hidden">
                    <Image
                        className="w-[150px] h-[80px]"
                        src="/fatec-logo.png"
                        width={150}
                        height={80}
                        alt="Logo Fatec"
                    />
                    <div className="flex items-center gap-4 justify-end w-full">
                        <Image
                            className="w-[66px] h-[44px]"
                            src="/cps-logo.png"
                            width={66}
                            height={44}
                            alt="Logo CPS"
                        />
                        <Image
                            className="w-[150px] h-[30px]"
                            src="/sp-logo.png"
                            width={150}
                            height={30}
                            alt="Logo SP"
                        />
                    </div>
                </CardTitle>
                <CardDescription className="mt-2 font-bold text-2xl text-black text-center">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {children}
            </CardContent>
            <CardFooter className="flex justify-stretch w-full">
                <Button
                    className="bg-blue-500 cursor-pointer text-white w-full"
                    variant="default"
                    onClick={
                    () => {buttonFunction()}
                    }>
                    {buttonText}
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CardFatec;