'use client'

import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CardFatec from '@/components/CardFatec';

function Page() {
    return (
        <CardFatec
            description={`Cadastro e Envio de Atividades`}
            buttonText={`Enviar`}
            buttonFunction={() => { alert(`Enviado!`) }}
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="idAtividade">ID da Atividade</Label>
                <Input name="idAtividade" id="idAtividade" type="number" placeholder="Digite o ID da atividade" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="ra">RA</Label>
                <Input name="ra" id="ra" type="number" placeholder="Digite o RA do aluno" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="dataEntrega">Data de Entrega</Label>
                <Input name="dataEntrega" id="dataEntrega" type="date" placeholder="dd/mm/aaaa" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="descricao">Descrição da Atividade</Label>
                <textarea name="descricao" id="descricao" cols={30} rows={4} placeholder="Digite a descrição da atividade" />
            </div>
        </CardFatec>
    );
}

export default Page;