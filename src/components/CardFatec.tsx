'use client'

import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CardFatecHeader from './CardFatecHeader';

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
        buttonFunction = () => { alert('Sem Função') }
    }: Props) {
    return (
        <Card className="w-[500px] shadow-lg">
            <CardFatecHeader description={description} />
            <CardContent className="flex flex-col gap-4">
                {children}
            </CardContent>
            <CardFooter className="flex justify-stretch w-full">
                <Button
                    className="bg-blue-500 cursor-pointer text-white w-full"
                    variant="default"
                    onClick={
                        () => { buttonFunction() }
                    }>
                    {buttonText}
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CardFatec;