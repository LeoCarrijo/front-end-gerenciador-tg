'use client'

import React, { useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { SquarePen } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { generateToast } from '@/lib/utils'
import { patchAtividade } from '@/actions/cadastros/atividades/actions'

interface Props {
    atividadeID: number,
    alunoRa: string
}

function EditButton({ atividadeID, alunoRa }: Props) {
    const formSchema = z.object({
        alunoOrientadoRa: z.string(),
        tema: z.string(),
        objetivo: z.string(),
        questaoProblema: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            alunoOrientadoRa: "",
            tema: "",
            objetivo: "",
            questaoProblema: ""
        }
    })

    useEffect(() => {
        form.reset({ ...form.getValues(), alunoOrientadoRa: alunoRa })
    }, [alunoRa])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await patchAtividade(values, atividadeID)
        } catch (error) {
            generateToast("Erro ao editar aluno:", false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <SquarePen className='text-amber-600 duration-150 hover:text-amber-900 active:text-amber-600' />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Tarefa</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='m-auto self-center flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name="alunoOrientadoRa"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={field.name}>RA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="RA do aluno" id={field.name} {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tema"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={field.name}>Tema da Atividade</FormLabel>
                                    <Input type='text' placeholder="Tema da atividade" id={field.name} {...field} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="objetivo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={field.name}>Objetivo da Atividade</FormLabel>
                                    <Input type='text' placeholder="Objetivo da atividade" id={field.name} {...field} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="questaoProblema"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={field.name}>Questão Problema</FormLabel>
                                    <Input type='text' placeholder="Questão problema da atividade" id={field.name} {...field} />
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
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default EditButton