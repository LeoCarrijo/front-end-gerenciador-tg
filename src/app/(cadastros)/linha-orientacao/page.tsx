'use client'

import CardFatec from '@/components/CardFatec'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { Label } from '@/components/ui/label'
import React from 'react'
import { resolve } from 'path'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function LinhaOrientacaoPage() {

    const formSchema = z.object({
        linha: z.string(),
        // professorOrientadorCpf: z.string(),
        cpfs: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            linha: "",
            // professorOrientadorCpf: "",
            cpfs: ""
        }
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description={`Cadastro de Linha de Orientação`}
                    buttonText={`Cadastrar Linha de Orientação`}
                    buttonFunction={() => { alert(`Linha de Orientação Cadastrada!`) }}
                >
                    <FormField
                        control={form.control}
                        name="linha"
                        render={({ field }) => {
                            return (
                                <FormItem className="flex flex-col gap-1">
                                    <FormLabel htmlFor='linha'>Nome da Linha de Orientação</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Digite o nome da linha de orientação" {...field} />
                                    </FormControl>
                                </FormItem>
                            )
                        }}

                    />
                </CardFatec>
            </form>
        </Form>
    )
}

export default LinhaOrientacaoPage