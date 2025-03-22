'use client'

import React from 'react';
import CardFatec from "@/components/CardFatec";

function TestPage() {
    return (
        <CardFatec
            description={'Titulo teste'}
            buttonText={`Enviar teste`}
            buttonFunction={() => {alert("Enviado teste!")}}
        >
            <div>Pau no meu cu</div>
        </CardFatec>
    );
}

export default TestPage;