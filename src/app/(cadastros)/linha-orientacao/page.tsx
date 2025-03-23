'use client'

import CardFatec from '@/components/CardFatec'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function LinhaOrientacaoPage() {
    return (
        <CardFatec
            description={`Cadastro de Linha de Orientação`}
            buttonText={`Cadastrar Linha de Orientação`}
            buttonFunction={() => { alert(`Linha de Orientação Cadastrada!`) }}
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="linha_orientacao">Nome da Linha de Orientação</Label>
                <Input name="linha_orientacao" id="linha_orientacao" type="text" placeholder="Digite o nome da linha de orientação" />
            </div>
        </CardFatec>
    )
}

export default LinhaOrientacaoPage