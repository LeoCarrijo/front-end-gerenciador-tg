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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


function OrientadorPage() {
    return (
        <div className="flex items-center justify-center h-screen my-20">
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
                    <CardDescription className="mt-2 font-bold text-2xl text-black text-center">Cadastro de Professor Orientador</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="cpf">CPF</Label>
                        <Input name="cpf" id="cpf" type="text" placeholder="Digite o CPF do professor" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="nome">Nome</Label>
                        <Input name="nome" id="nome" type="text" placeholder="Digite o nome do professor" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="orientacao">Linha de Orientação</Label>
                        <Input name="orientacao" id="orientacao" type="text" placeholder="Digite a linha da orientação" />
                    </div>
                    <Button className="bg-gray-500 cursor-pointer text-white self-start" variant="default">Adicionar Linha de Orientação</Button>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="instituicoes">Quantidade de Instituições que Leciona</Label>
                        <Input name="instituicoes" id="instituicoes" type="number" placeholder="Digite a quantidade de instituições" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="cursos">Cursos de Atuação</Label>
                        <Input name="cursos" id="cursos" type="text" placeholder="Digite os cursos de atuação" />
                    </div>
                    <Button className="bg-gray-500 cursor-pointer text-white self-start" variant="default">Adicionar Curso de Atuação</Button>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="alunos">Quantidade de Alunos Orientandos</Label>
                        <Input name="alunos" id="alunos" type="num" placeholder="Digite a quantidade de alunos orientandos" />
                    </div>
                </CardContent>
                <CardFooter className="flex">
                    <Button className="bg-blue-500 cursor-pointer text-white w-full" variant="default">Cadastrar</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default OrientadorPage;