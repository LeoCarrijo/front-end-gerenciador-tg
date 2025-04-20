'use client'

import React from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CardFatec from '@/components/CardFatec';

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function OrientadorPage() {
    return (
        <CardFatec
            description={`Cadastro de Professor Orientador`}
            buttonText={`Cadastrar`}
            buttonFunction={() => { alert(`Professor Orientador Cadastrado!`) }}
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="cpf">CPF</Label>
                <Input name="cpf" id="cpf" type="text" placeholder="Digite o CPF do professor" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="nome">Nome</Label>
                <Input name="nome" id="nome" type="text" placeholder="Digite o nome do professor" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="linhaOrientacao">Linha de Orientação</Label>
                <Input name="linhaOrientacao" id="linhaOrientacao" type="text" placeholder="Digite a linha da orientação" />
            </div>
            <Button className="bg-gray-500 cursor-pointer text-white self-start" variant="default">Adicionar Linha de Orientação</Button>
            <div className="flex flex-col gap-1">
                <Label htmlFor="quantidadeInstituicoes">Quantidade de Instituições que Leciona</Label>
                <Input name="quantidadeInstituicoes" id="quantidadeInstituicoes" type="number" placeholder="Digite a quantidade de instituições" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="cursosAtuacao">Cursos de Atuação</Label>
                <Input name="cursosAtuacao" id="cursosAtuacao" type="text" placeholder="Digite os cursos de atuação" />
            </div>
            <Button className="bg-gray-500 cursor-pointer text-white self-start" variant="default">Adicionar Curso de Atuação</Button>
            <div className="flex flex-col gap-1">
                <Label htmlFor="quantidadeAlunos">Quantidade de Alunos Orientandos</Label>
                <Input name="quantidadeAlunos" id="quantidadeAlunos" type="num" placeholder="Digite a quantidade de alunos orientandos" />
            </div>
        </CardFatec>
    );
}

export default OrientadorPage;