import React from 'react'
import { Card, CardContent } from './ui/card';
import FatecCardHeader from './CardFatecHeader';

interface Props {
    children: React.ReactNode
    description?: string
}

function CardFatecRelatorios({ description = 'Título Principal do CardFatecRelatorios', children }: Props) {
    return (
        <Card className="shadow-lg">
            <FatecCardHeader description={description} />
            <CardContent className="flex flex-col gap-4">
                {children}
            </CardContent>
        </Card>
    );
}

export default CardFatecRelatorios