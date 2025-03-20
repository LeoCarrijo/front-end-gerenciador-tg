"use client"

import React, {useState} from 'react';
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function AlunoOrientandoPage() {
    const [possuiProf, setPossuiProf] = useState(false)
    const [prof, setProf] = useState('')
    const [turno, setTurno] = useState('')

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
                    <CardDescription className="mt-2 font-bold text-2xl text-black text-center">Cadastro de Aluno Orientando</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="nome">Nome</Label>
                        <Input name="nome" id="nome" type="text" placeholder="Digite o nome do aluno" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="ra">Matrícula</Label>
                        <Input name="ra" id="ra" type="number" placeholder="Digite o RA do aluno" />
                    </div>
                    <div className="flex gap-1 w-full">
                        <div className="flex flex-col gap-1 w-full">
                            <Label htmlFor="curso">Curso</Label>
                            <Input name="curso" id="curso" type="text" placeholder="Selecione o curso do aluno" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <Label htmlFor="turma">Turma</Label>
                            <Input name="turma" id="turma" type="text" placeholder="Selecione a turma do aluno" />
                        </div>
                    </div>
                    <div className="flex gap-1 w-full">
                        <div className="flex flex-col gap-1 w-full">
                            <Label htmlFor="turma">Turma</Label>
                            <div className="flex gap-2">
                                <Button className={`cursor-pointer hover:bg-blue-300 hover:text-white ${turno === 'matutino' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} variant="outline" onClick={() => {setTurno('matutino')}}>Matutino</Button>
                                <Button className={`cursor-pointer hover:bg-blue-300 hover:text-white ${turno === 'noturno' ? 'bg-blue-500 text-white' : 'bg-white text-black '}`} variant="outline" onClick={() => {setTurno('noturno')}}>Noturno</Button>
                            </div>
                        </div>
                        <div className="flex gap-1 w-full">
                            <div className="flex flex-col gap-1 w-full">
                                <Label htmlFor="orientacao">Semestre</Label>
                                <Input name="orientacao" id="orientacao" type="number" placeholder="Selecione o semestre do aluno" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <Label htmlFor="orientacao">Há dependência?</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione se o aluno tem dependência" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sim">Sim</SelectItem>
                                <SelectItem value="nao">Não</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="email">E-mail Institucional</Label>
                        <Input name="email" id="email" type="email" placeholder="Digite o e-mail institucional do aluno" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="possui-prof" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Possui Professor Orientador?
                        </label>
                        <div className="flex gap-1">
                            <Checkbox id="possui-prof" onCheckedChange={() => {
                                setPossuiProf(!possuiProf)
                                setProf('')
                            }} checked={possuiProf} />
                            <label htmlFor="possui-prof" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Sim
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="orientador">Professor Orientador</Label>
                        {possuiProf ?
                            <Select defaultValue={prof} onValueChange={
                                (value) => {setProf(value)}
                            }>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione o nome do professor orientador" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="prof1">Prof 1</SelectItem>
                                    <SelectItem value="prof2">Prof 2</SelectItem>
                                    <SelectItem value="prof3">Prof 3</SelectItem>
                                </SelectContent>
                            </Select>
                            :
                            <Select defaultValue={prof} disabled onValueChange={
                                (value) => {setProf(value)}
                            }>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione o nome do professor orientador" />
                                </SelectTrigger>
                                <SelectContent id="prof_escolha">
                                    <SelectItem value="prof1">Prof 1</SelectItem>
                                    <SelectItem value="prof2">Prof 2</SelectItem>
                                    <SelectItem value="prof3">Prof 3</SelectItem>
                                </SelectContent>
                            </Select>
                        }
                    </div>
                </CardContent>
                <CardFooter className="flex">
                    <Button className="bg-blue-500 cursor-pointer text-white w-full" variant="default">Cadastrar</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default AlunoOrientandoPage;