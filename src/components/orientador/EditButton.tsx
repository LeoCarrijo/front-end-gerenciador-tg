'use client'

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SquarePen } from 'lucide-react'
import { patchOrientador } from '@/actions/cadastros/orientador/actions'
import { generateToast } from '@/lib/utils'

interface Props {
    orientadorCpf: string
    orientadorNome: string
}

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

function EditButton({ orientadorCpf, orientadorNome }: Props) {
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
            await patchOrientador(values, orientadorCpf)
        } catch (error) {
            generateToast("Erro ao editar orientador:", false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <SquarePen className='text-amber-600 duration-150 hover:text-amber-900 active:text-amber-600' />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edição do {orientadorNome}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='m-auto self-center flex flex-col gap-4'>
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
                        <Button
                            type='submit'
                            className="bg-blue-500 cursor-pointer text-white w-full"
                            variant="default"
                            onClick={
                                () => { }
                            }>
                            Editar
                        </Button>
                    </form>
                </Form >
            </DialogContent>
        </Dialog>
    )
}

export default EditButton