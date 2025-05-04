'use client'

import React from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CardFatec from '@/components/CardFatec';
import { createOrientador } from '@/actions/cadastros/orientador/actions';

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

const linhaOrientacaoSchema = z.object({
    linha: z.string(),
    professorOrientadorCpf: z.string(),
    cpfs: z.string()
})

const cursoAtuacaoSchema = z.object({
    curso: z.string()
})

const alunoOrientadoSchema = z.object({
    nome: z.string(),
    matricula: z.string(),
    curso: z.string(),
    turma: z.string(),
    periodo: z.enum(["matutino", "noturno"]),
    semestre: z.string(),
    haDependencia: z.boolean(),
    email: z.string().email(),
    possuiProf: z.boolean(),
    professorOrientador: z.string().optional()
})


function OrientadorPage() {
    const formSchema = z.object({
        cpf: z.string(),
        nome: z.string(),
        email: z.string().email(),
        senha: z.string(),
        linhasOrientacao: z.array(linhaOrientacaoSchema),
        cursosAtuacao: z.array(cursoAtuacaoSchema),
        alunosOrientados: z.array(alunoOrientadoSchema)
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cpf: "",
            nome: "",
            email: "",
            senha: "",
            linhasOrientacao: [],
            cursosAtuacao: [],
            alunosOrientados: []
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        try {
            const response = await createOrientador(values)
            console.log(response)
            alert(`Professor Orientador Cadastrado!`)
        } catch (error) {
            console.error("Erro ao cadastrar professor orientador:", error)
            alert(`Erro ao cadastrar professor orientador: ${error}`)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description={`Cadastro de Professor Orientador`}
                    buttonText={`Cadastrar`}
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="cpf"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='cpf'>CPF</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o CPF do professor" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='nome'>Nome</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o nome do professor" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='email'>Email</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o email do professor" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='senha'>Senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Digite a senha do professor" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    {/* <FormField
                        control={form.control}
                        name="linhasOrientacao"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='linhasOrientacao'>Linhas De Orientacao</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione as linhas do professor" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="cursosAtuacao"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='cursosAtuacao'>Curso de Atuação</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione os cursos de atuação do professor" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="alunosOrientados"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel htmlFor='alunosOrientados'>Alunos Orientandos</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Selecione os alunos orientandos do professor" {...field} />
                                    </FormControl>
                                </FormItem>)
                        }}
                    /> */}
                </CardFatec>
            </form>
        </Form >
        // <CardFatec
        //     description={`Cadastro de Professor Orientador`}
        //     buttonText={`Cadastrar`}
        //     buttonFunction={() => { alert(`Professor Orientador Cadastrado!`) }}
        // >
        //     <div className="flex flex-col gap-1">
        //         <Label htmlFor="cpf">CPF</Label>
        //         <Input name="cpf" id="cpf" type="text" placeholder="Digite o CPF do professor" />
        //     </div>
        //     <div className="flex flex-col gap-1">
        //         <Label htmlFor="nome">Nome</Label>
        //         <Input name="nome" id="nome" type="text" placeholder="Digite o nome do professor" />
        //     </div>
        //     <div className="flex flex-col gap-1">
        //         <Label htmlFor="linhaOrientacao">Linha de Orientação</Label>
        //         <Input name="linhaOrientacao" id="linhaOrientacao" type="text" placeholder="Digite a linha da orientação" />
        //     </div>
        //     <Button className="bg-gray-500 cursor-pointer text-white self-start" variant="default">Adicionar Linha de Orientação</Button>
        //     <div className="flex flex-col gap-1">
        //         <Label htmlFor="quantidadeInstituicoes">Quantidade de Instituições que Leciona</Label>
        //         <Input name="quantidadeInstituicoes" id="quantidadeInstituicoes" type="number" placeholder="Digite a quantidade de instituições" />
        //     </div>
        //     <div className="flex flex-col gap-1">
        //         <Label htmlFor="cursosAtuacao">Cursos de Atuação</Label>
        //         <Input name="cursosAtuacao" id="cursosAtuacao" type="text" placeholder="Digite os cursos de atuação" />
        //     </div>
        //     <Button className="bg-gray-500 cursor-pointer text-white self-start" variant="default">Adicionar Curso de Atuação</Button>
        //     <div className="flex flex-col gap-1">
        //         <Label htmlFor="quantidadeAlunos">Quantidade de Alunos Orientandos</Label>
        //         <Input name="quantidadeAlunos" id="quantidadeAlunos" type="num" placeholder="Digite a quantidade de alunos orientandos" />
        //     </div>
        // </CardFatec>
    );
}

export default OrientadorPage;