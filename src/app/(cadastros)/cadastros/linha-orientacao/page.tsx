'use client'

import CardFatec from '@/components/CardFatec'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { createLinhaOrientacao } from '@/actions/cadastros/linha-orientacao/actions'
import { generateToast } from '@/lib/utils'

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function LinhaOrientacaoPage() {

    const formSchema = z.object({
        linha: z.string(),
        cpfs: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            linha: "",
            cpfs: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            await createLinhaOrientacao(data)
            generateToast("Linha de Orientação criada com sucesso!", true)
        } catch (error) {
            generateToast("Erro ao criar linha de orientação:", false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardFatec
                    description="Cadastro de Linha de Orientação"
                    buttonText="Cadastrar Linha de Orientação"
                    buttonFunction={() => { }}
                >
                    <FormField
                        control={form.control}
                        name="linha"
                        render={({ field }) => (
                            <FormItem className='form-item'>
                                <FormLabel htmlFor={field.name}>Nome da Linha de Orientação</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Digite o nome da linha de orientação" {...field} id={field.name} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </CardFatec>
            </form>
        </Form>
    )
}

export default LinhaOrientacaoPage