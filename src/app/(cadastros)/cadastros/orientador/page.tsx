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
import { generateToast } from '@/lib/utils';

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
        try {
            await createOrientador(values)
            generateToast("Professor Orientador Cadastrado!", true)
        } catch (error) {
            generateToast("Erro ao cadastrar professor orientador:", false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description="Cadastro de Professor Orientador"
                    buttonText="Cadastrar"
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="cpf"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>CPF</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o CPF do professor" {...field} id={field.name} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>Nome</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o nome do professor" {...field} id={field.name} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>Email</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o email do professor" {...field} id={field.name} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={field.name}>Senha</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Digite a senha do professor" {...field} id={field.name} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </CardFatec>
            </form>
        </Form >
    );
}

export default OrientadorPage;