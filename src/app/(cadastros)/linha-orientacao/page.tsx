'use client'

import CardFatec from '@/components/CardFatec'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function LinhaOrientacaoPage() {
    return (
        <CardFatec
            description={`Cadastro de Linha de Orientação`}
            buttonText={`Cadastrar Linha de Orientação`}
            buttonFunction={() => { alert(`Linha de Orientação Cadastrada!`) }}
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="linha">Nome da Linha de Orientação</Label>
                <Input name="linha" id="linha" type="text" placeholder="Digite o nome da linha de orientação" />
            </div>
        </CardFatec>
    )
}

export default LinhaOrientacaoPage