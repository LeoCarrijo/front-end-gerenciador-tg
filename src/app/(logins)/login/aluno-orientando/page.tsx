'use client'

import React from 'react';
import CardFatec from "@/components/CardFatec"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


function AlunoOrientandoLoginPage() {
    return (
        <CardFatec
            description={`Login de Aluno Orientando`}
            buttonText={`Logar`}
            buttonFunction={() => { alert("Tentando logar!") }}
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="email">E-mail</Label>
                <Input name="email" id="email" type="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="senha">Senha</Label>
                <Input name="senha" id="senha" type="password" placeholder="Digite sua senha" />
            </div>
        </CardFatec>
    );
}

export default AlunoOrientandoLoginPage;